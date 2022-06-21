import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQ-jzfYlpB1L2ld76jBDkesMXZLov8f3E",
  authDomain: "fir-sample-fa008.firebaseapp.com",
  projectId: "fir-sample-fa008",
  storageBucket: "fir-sample-fa008.appspot.com",
  messagingSenderId: "76005461385",
  appId: "1:76005461385:web:bc2932d7d8546c69f8e558"
};

firebase.initializeApp(firebaseConfig);