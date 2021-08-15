/* eslint-disable no-unused-vars */
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD5FkvNZvnPART6jItRm4Yrh2ofTmS8o6c',
  authDomain: 'english-batayon.firebaseapp.com',
  projectId: 'english-batayon',
  storageBucket: 'english-batayon.appspot.com',
  messagingSenderId: '550711462248',
  appId: '1:550711462248:web:14c8b8222652935b992edd',
  measurementId: 'G-1KZ821FGT1',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth()
export default firebase
