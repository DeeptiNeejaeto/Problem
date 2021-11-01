  var firebaseConfig = {
  apiKey: "AIzaSyAQAfDQUTG3GpN1-19q9QKcfwfCbdPWow8",
  authDomain: "kwitter-96771.firebaseapp.com",
  databaseURL: "https://kwitter-96771-default-rtdb.firebaseio.com",
  projectId: "kwitter-96771",
  storageBucket: "kwitter-96771.appspot.com",
  messagingSenderId: "38774538084",
  appId: "1:38774538084:web:464834434474e5b5870471",
  measurementId: "G-63TCN115VG"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name "
  }); 

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       Room_names = childKey;
      
       console.log("Room Name -"+Room_Names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });

}
    
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location ="kwitter_page.html";
}
