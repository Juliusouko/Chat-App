import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    apiKey: 'AIzaSyCOMqwDcDwvHYLIPBvb28y-pCDFbtT3pTM',
    authDomain: 'chat-app-24059.firebaseapp.com',
    databaseURL: 'https://chat-app-24059.firebaseio.com',
    projectId: 'chat-app-24059',
    storageBucket: 'chat-app-24059.firebasestorage.app',
    messagingSenderId: '273486990858',
    appId: '1:273486990858:web:9f7d8057e1090c51b419f3',
    measurementId: 'G-LCX2N64CXY',
  },
};


// const firebaseConfig = {
//   apiKey: "AIzaSyCOMqwDcDwvHYLIPBvb28y-pCDFbtT3pTM",
//   authDomain: "chat-app-24059.firebaseapp.com",
//   projectId: "chat-app-24059",
//   storageBucket: "chat-app-24059.firebasestorage.app",
//   messagingSenderId: "273486990858",
//   appId: "1:273486990858:web:9f7d8057e1090c51b419f3",
//   measurementId: "G-LCX2N64CXY"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);