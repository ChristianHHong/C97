var firebaseConfig = {
    apiKey: "AIzaSyDwggt4XdkXwEd9rkOrhsYUEmBKeupzMXg",
    authDomain: "kwitter-6486f.firebaseapp.com",
    databaseURL: "https://kwitter-6486f-default-rtdb.firebaseio.com",
    projectId: "kwitter-6486f",
    storageBucket: "kwitter-6486f.appspot.com",
    messagingSenderId: "1019876792968",
    appId: "1:1019876792968:web:c220c4f81e4aff5cb51d3d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "gc_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
          window.location = "gc_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}