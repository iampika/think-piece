import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAY-kMg2Q1ckW0NaRBTpczo0xieow6Thas',
  authDomain: 'think-piece-5786c.firebaseapp.com',
  databaseURL: 'https://think-piece-5786c.firebaseio.com',
  projectId: 'think-piece-5786c',
  storageBucket: 'think-piece-5786c.appspot.com',
  messagingSenderId: '714767795597',
  appId: '1:714767795597:web:fec23f0374617861e7e9c4',
  measurementId: 'G-DZSVY30CR0'
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase
