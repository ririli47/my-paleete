import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAxagj6VUrxyl6-UWo724wS3xEKt90owj8',
  authDomain: 'my-pallete-2acec.firebaseapp.com',
  databaseURL: 'https://my-pallete-2acec.firebaseio.com',
  projectId: 'my-pallete-2acec',
  storageBucket: 'my-pallete-2acec.appspot.com',
  messagingSenderId: '1027310116089',
  appId: '1:1027310116089:web:d26b1cd8d731eb3c'
}

firebase.initializeApp(config)

export default firebase
