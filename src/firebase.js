import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAOrbj3l1Iqua-bo6JXL8Ck0_SqJ_Zj-FI",
  authDomain: "final-hackathon-c7280.firebaseapp.com",
  projectId: "final-hackathon-c7280",
  storageBucket: "final-hackathon-c7280.appspot.com",
  messagingSenderId: "235493349358",
  appId: "1:235493349358:web:b9b7413343e9ce4df5e0ff"
})

export const auth = app.auth()
export default app
