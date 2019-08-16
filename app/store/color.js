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
  login({ commit }) {
    console.log('login action')
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = result.user
        console.log('success : ' + user.uid + ' : ' + user.displayName)
        commit('setUserUid', user.uid)
        commit('setUserName', user.displayName)
      })
      .catch(function(error) {
        const errorCode = error.code
        console.log('error : ' + errorCode)
      })
  },
  fetchColors({ commit }) {
    commit('clearColor')
    colorRef
      .get()
      .then(res => {
        res.forEach(doc => {
          console.log('success : ' + `${doc.id} => ${doc.data()}`)
          commit('addColor', doc.data())
        })
      })
      .catch(error => {
        console.log('error : ' + error)
      })
  }
  //   addColor({ commit }, color) {
  //     console.log(color)
  //     colorRef
  //       .add({
  //         color: color.color,
  //         limit: color.limit
  //       })
  //       .then(function(docRef) {
  //         console.log('Document written with ID: ', docRef.id)
  //         commit('addColor', color)
  //       })
  //       .catch(function(error) {
  //         console.error('Error adding document: ', error)
  //       })
  //   }
}

export const getters = {
  getColors(state) {
    return state.colors
  }
}
