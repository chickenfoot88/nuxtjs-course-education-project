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