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

      async authenticateUser({ commit }, authData) {

        let token
        let tokenExpirationDate

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

          token               = idToken
          tokenExpirationDate = new Date().getTime() + Number.parseInt(expiresIn) * 1000

          localStorage.setItem('token', token)
          localStorage.setItem('tokenExpirationDate', tokenExpirationDate)

          Cookie.set('token', token)
          Cookie.set('tokenExpirationDate', tokenExpirationDate)

          return Promise.resolve()

        } catch(error) {
          return Promise.reject(error)
        }
      },

      initAuth({ dispatch, commit }, request) {

        let token
        let tokenExpirationDate
        
        if(request) {
          if(!request.headers.cookie) return
          
          const tokenCookie = request.headers.cookie
            .split(';')
            .find(cookie => cookie.trim().startsWith('token='))

          if(!tokenCookie) return
          
          token               = tokenCookie.split('=')[1]
          tokenExpirationDate = request.headers.cookie
            .split(';')
            .find(cookie => cookie.trim().startsWith('tokenExpirationDate=') )
            .split('=')[1]
          
        } else {
          tokenExpirationDate = +localStorage.getItem('tokenExpirationDate')
          token = localStorage.getItem('token')
        }

        if (new Date().getTime() > tokenExpirationDate || !token) {
          dispatch('logout')
          return
        }

        commit('setToken', token)
      },

      logout({ commit }) {
        commit('clearToken')
        const tokenData = ['token', 'tokenExpirationDate']
        tokenData.forEach(item => { Cookie.remove(item) })
        if(process.client) tokenData.forEach(item => { localStorage.removeItem(item) })
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