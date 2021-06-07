importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCaGkOF0qTm_1rOieTRXO3a3XXYZLMXicA",
    authDomain: "pwa-project-f0c7d.firebaseapp.com",
    projectId: "pwa-project-f0c7d",
    storageBucket: "pwa-project-f0c7d.appspot.com",
    messagingSenderId: "1003118400947",
    appId: "1:1003118400947:web:86ef90553a9c015e8d67c6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();