import firebase from '~/plugins/firebase'
// import auth from '~/plugins/auth'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  signOut(state) {
    state.user = null
  }
}

export const actions = {
  async googleSignIn({ dispatch, commit }) {
    console.log('test console 1')

    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
    // await firebase.auth().signInWithRedirect(provider)

    console.log('test console 2')

    const user = await dispatch('getAuthStateus')
    if (user) {
      console.log('user found')

      const { email, displayName, uid, metadata } = user
      commit('setUser', { email, displayName, uid, metadata })
    } else {
      console.log('user not found')

      commit('signOut')
      this.$router.push('/')
    }
  },
  getAuthStateus() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
  },
  googleSignOut({ dispatch, commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push('/')
      })
      .catch(() => {
        console.log('sign out error')
      })
  }
}

export const getters = {
  getUser(state) {
    return state.user
  }
}
