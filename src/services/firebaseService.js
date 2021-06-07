import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaGkOF0qTm_1rOieTRXO3a3XXYZLMXicA",
    authDomain: "pwa-project-f0c7d.firebaseapp.com",
    projectId: "pwa-project-f0c7d",
    storageBucket: "pwa-project-f0c7d.appspot.com",
    messagingSenderId: "1003118400947",
    appId: "1:1003118400947:web:86ef90553a9c015e8d67c6"
  };

firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotificaton(){
    Notification.requestPermission().then((permission) => 
    {console.log(permission)
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("Tokken");
                    console.log("Tokken => " ,currentToken );
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}