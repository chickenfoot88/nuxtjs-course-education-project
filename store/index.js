import Vuex from 'vuex'
import axios from 'axios'

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
        return axios({
          method: 'GET',
          url: 'https://udemy-nuxt-course-fb043.firebaseio.com/posts.json'
        })
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
          let { data } = await axios.post('https://udemy-nuxt-course-fb043.firebaseio.com/posts.json', createdPost)
          commit('addPost', { ...createdPost, id: data.name })
        } catch (error) {
          console.error('error', error)
        } 
      },

      async editPost({ commit }, editedPost) {
        try {
          let { data } = await axios.put(`https://udemy-nuxt-course-fb043.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
          commit('editPost', data)
        } catch (error) {
          console.error('error', error)
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