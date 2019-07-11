import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: {}
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if(!process.client) {
          console.log(context.req.session)
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'title',
                previewText: 'first post',
                thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
              },
              {
                id: '2',
                title: 'title 2',
                previewText: 'first post',
                thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
              },
              {
                id: '3',
                title: 'title 3',
                previewText: 'first post',
                thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
              }
            ])
            resolve()
          }, 1500);
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