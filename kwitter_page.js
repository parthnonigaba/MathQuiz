//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBH-oITHZ8MoNRqRo2EHg-0j5C7r0G8ypI",
      authDomain: "kwitter-380db.firebaseapp.com",
      projectId: "kwitter-380db",
      storageBucket: "kwitter-380db.appspot.com",
      messagingSenderId: "308970590677",
      appId: "1:308970590677:web:68527cb038d928110a2d5c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
