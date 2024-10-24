1/              
  git add .
2/              
  git commit -m "changes"
3/              
  git push origin master --force


copy//



git add .              
git commit -m "changes"
git push origin master --force


//firebae code.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpK8GgrlWqCDz_oXT1pxCgdt8vSJ5GVs",
  authDomain: "metzz-f7936.firebaseapp.com",
  projectId: "metzz-f7936",
  storageBucket: "metzz-f7936.appspot.com",
  messagingSenderId: "574494985875",
  appId: "1:574494985875:web:75eb8dc4641c071a1a0766",
  measurementId: "G-4YKVXH77FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);