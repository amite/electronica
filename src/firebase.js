import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyC10NqsH3FIor7P6slFCCWLP4VG-MRplBA',
  authDomain: 'electronica-demo.firebaseapp.com',
  databaseURL: 'https://electronica-demo.firebaseio.com',
  projectId: 'electronica-demo',
  storageBucket: 'electronica-demo.appspot.com',
  messagingSenderId: '54652065560'
}

firebase.initializeApp(config)

export const db = firebase.firestore()
