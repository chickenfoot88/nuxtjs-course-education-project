import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },

      addPost(state, post) {
        state.loadedPosts.push(post)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },

      setToken(state, token) {
        state.token = token
      },

      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios.$get(`${process.env.baseUrl}/posts.json`)
          .then(data => {
            const postArray = []
            for(let key in data) {
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch(error => {
            context.error(error)
          })
      },

      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },

      async addPost({ commit, state: { token }  }, postData) {
        const createdPost = { ...postData, updatedDate: new Date() }
        try {
          let { data } = await this.$axios({
            method: 'POST',
            url: `${process.env.baseUrl}/posts.json`,
            data: createdPost,
            params: {
              auth: token
            }
          })
          commit('addPost', { ...createdPost, id: data.name })
        } catch (error) {
          console.error('error', error)
        } 
      },

      async editPost({ commit, state: { token } }, editedPost) {
        try {
          let { data } = await this.$axios({
            method: 'PUT',
            url: `${process.env.baseUrl}/posts/${editedPost.id}.json`,
            data: editedPost,
            params: {
              auth: token
            }
          })
          commit('editPost', data)
        } catch (error) {
          console.error('error', error)
        }
      },

      async authenticateUser({ dispatch, commit }, authData) {
        try {
          let { data: { idToken, expiresIn } } = await this.$axios({
            method: 'POST',
            url: authData.isLogin ? process.env.fbSignInUrl : process.env.fbSignUpUrl,
            params: {
              key: process.env.fbAPIkey
            },
            data: {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          })
          commit('setToken', idToken)
          dispatch('setLogoutTime', expiresIn * 1000)

          localStorage.setItem('token', idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + expiresIn * 1000)
          Cookie.set('jwt', idToken)
          Cookie.set('expirationDate', new Date().getTime() + expiresIn * 1000)

          return Promise.resolve()
        } catch(error) {
          return Promise.reject(error)
        }
      },

      setLogoutTimer({ commit }, duration) {
        setTimeout(() => {
          commit('clearToken')
        }, duration)
      },

      initAuth({ dispatch, commit }, request) {
        let token
        let expirationDate
        
        if(request) {
          if(!request.headers.cookie) return
          
          const jwtCookie = request.headers.cookie
          .split(';')
          .find(cookie => cookie.trim().startsWith('jwt='))

          
          if(!jwtCookie) {
            return
          }
          
          token = jwtCookie.split('=')[1]

          
          expirationDate = request.headers.cookie
          .split(';')
          .find(cookie => cookie.trim().startsWith('expirationDate=') )
          .split('=')[1]
          
        } else {

          expirationDate = +localStorage.getItem('tokenExpiration')
          token = localStorage.getItem('token')

          if (new Date().getTime() > expirationDate || token) return
        }

        commit('setToken', token)
        dispatch('setLogoutTimer', expirationDate - new Date().getTime())
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    },
  })
}

export default createStore