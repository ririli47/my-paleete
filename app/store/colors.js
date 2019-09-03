import firebase from '~/plugins/firebase'
const db = firebase.firestore()

const colorRef = db.collection('colors')

export const state = () => ({
  colors: []
})

export const mutations = {
  addColor(state, color) {
    state.colors.push(color)
  },
  clearColor(state) {
    state.colors = []
  }
}

export const actions = {
  fetchColors({ commit, rootGetters }) {
    const user = rootGetters['users/getUser']

    console.log(user)
    commit('clearColor')
    colorRef
      .where('userId', '==', user.uid)
      .get()
      .then(res => {
        res.forEach(doc => {
          console.log('success : ' + `${doc.id} => ${doc.data()}`)
          const color = doc.data()
          color.colorId = doc.id

          commit('addColor', color)
        })
      })
      .catch(error => {
        console.log('error : ' + error)
      })
  },
  addColor({ commit }, color) {
    console.log(color)
    colorRef
      .add({
        colorCode: color.colorCode,
        description: color.description,
        userId: color.userId
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
        color.colorId = docRef.id
        commit('addColor', color)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  },
  updateColor({ commit, dispatch }, color) {
    console.log(color)
    colorRef
      .doc(color.colorId)
      .update({
        colorCode: color.colorCode,
        description: color.description,
        userId: color.userId
      })
      .then(function() {
        console.log('Document update')
        commit('clearColor')
        dispatch('fetchColors')
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  },
  deleteColor({ commit, dispatch }, colorId) {
    console.log(colorId)
    colorRef
      .doc(colorId)
      .delete()
      .then(function() {
        console.log('Document delete')
        commit('clearColor')
        dispatch('fetchColors')
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }
}

export const getters = {
  getColors(state) {
    return state.colors
  }
}
