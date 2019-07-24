import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios.$get(`${process.env.baseUrl}/posts.json`)
          .then(response => {
            const postArray = []
            for(let key in response.data) {
              postArray.push({ ...response.data[key], id: key })
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

      async addPost({ commit }, postData) {
        const createdPost = { ...postData, updatedData: new Date() }
        try {
          let { data } = await this.$axios.$post(`${process.env.baseUrl}/posts.json`, createdPost)
          commit('addPost', { ...createdPost, id: data.name })
        } catch (error) {
          console.error('error', error)
        } 
      },

      async editPost({ commit }, editedPost) {
        try {
          let { data } = await this.$axios.$put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
          commit('editPost', data)
        } catch (error) {
          console.error('error', error)
        }
      },

      async authenticateUset({ state }, authData) {
        try {
          let { token } = await this.$axios({
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
        } catch(error) {
          console.log(error) 
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore