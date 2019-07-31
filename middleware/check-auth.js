export default function({ store: { dispatch }}) {
  if(process.clent) {
    dispatch('initAuth')
  }
}
