import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDG_5ze0nE0ZxD6e4_UW2fewRXraJZB-TA",
  authDomain: "portfolio-1d829.firebaseapp.com",
  databaseURL: "https://portfolio-1d829.firebaseio.com",
  projectId: "portfolio-1d829",
  storageBucket: "portfolio-1d829.appspot.com",
  messagingSenderId: "650997312265",
  appId: "1:650997312265:web:2b484bfd70bd49caf641d8"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
const fileStorage = firebase.storage()

export { database, fileStorage } 

