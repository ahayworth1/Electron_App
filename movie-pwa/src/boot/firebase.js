import firebase from "firebase/app"

import "firebase/firestore"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyASshz8NUrt7yLwGPBCKajaglNeEn-VnOo",
  authDomain: "movie-app-d5b5c.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/movie-app-d5b5c/firestore/data/~2Fmovies~2FfDDelMxHDTEQ9IImHDxW",
  projectId: "movie-app-d5b5c",
  storageBucket: "movie-app-d5b5c.appspot.com",
  messagingSenderId: "715269972322",
  appId: "1:715269972322:web:e98e28b253aadf4e464c3b"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let db = firebaseApp.firestore()

db.enablePersistence()
.catch(err => {
  if(err.code == 'failed-precondition'){
	console.log('persistance failed')
  }
  else if(err.code == 'unimplemented'){
	console.log('persistance unvailable')
  }
})
export { db }

