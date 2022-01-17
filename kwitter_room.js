
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      function RedirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location = "kwitter_page.html";
      }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
      //End code
      });});}
getData();
