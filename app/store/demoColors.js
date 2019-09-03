export const state = () => ({
  colors: []
})

export const mutations = {
  addColor(state, color) {
    state.colors.push(color)
  },
  clearColor(state) {
    state.colors = []
  },
  updateColor(state, color) {
    const updatedColorID = state.colors.indexOf(
      state.colors.find(oneColor => oneColor.colorId === color.colorId)
    )
    state.colors[updatedColorID] = Object.assign(
      {},
      state.colors[updatedColorID],
      {
        colorId: color.colorId,
        description: color.description,
        colorCode: color.colorCode
      }
    )
  },
  deleteColor: (state, colorId) => {
    state.colors = state.colors.filter(color => color.colorId !== colorId)
  }
}

export const actions = {
  addColor({ commit }, color) {
    console.log(color)
    const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const N = 16
    color.colorId = Array.from(Array(N))
      .map(() => S[Math.floor(Math.random() * S.length)])
      .join('')
    commit('addColor', color)
  },
  updateColor({ commit }, color) {
    commit('updateColor', color)
  },
  deleteColor({ commit }, colorId) {
    console.log(colorId)
    commit('deleteColor', colorId)
  }
}

export const getters = {
  getColors(state) {
    return state.colors
  }
}
