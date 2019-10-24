export const state = () => ({
  breadcrumbs: [],
})

export const mutations = {
  SET_BREADCRUMBS(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  }
}