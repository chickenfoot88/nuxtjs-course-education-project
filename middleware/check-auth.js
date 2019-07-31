export default function({ store: { dispatch }, req }) {
  dispatch('initAuth', req)
}
