import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Axxxxxxxxxxxxxxxxxxxx14",
    authDomain: "vue-auth-xxxxxx.firebaseapp.com",
    databaseURL: "https://vue-auth-xxxxxx.firebaseio.com",
    projectId: "vue-auth-xxxxxx",
    storageBucket: "vue-auth-xxxxxx.appspot.com",
    messagingSenderId: "2xxxxxxxxxxxxxxx1",
    appId: "1:2xxxxxxxxxxxxx1:web:xxxxxxxxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
