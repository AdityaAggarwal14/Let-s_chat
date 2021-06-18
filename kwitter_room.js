// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAULYo3Px2pVEUp-53st3Y8RVhjys1PaKc",
  authDomain: "let-s-chat-28f7f.firebaseapp.com",
  projectId: "let-s-chat-28f7f",
  storageBucket: "let-s-chat-28f7f.appspot.com",
  messagingSenderId: "837869970175",
  appId: "1:837869970175:web:0fbf3a0eeb54b5bf0a62ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
