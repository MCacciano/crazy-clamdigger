export const state = () => ({
  products: [],
  socials: [],
})

export const mutations = {
  setProducts: (state, products) => (state.products = products),
  setSocials: (state, socials) => (state.socials = socials),
}

export const getters = {
  products: ({ products }) => products,
  socials: ({ socials }) => socials,
}

export const actions = {
  setProducts({ commit }, products) {
    commit('setProducts', products)
  },
  setSocials({ commit }, socials) {
    commit('setSocials', socials)
  },
}
