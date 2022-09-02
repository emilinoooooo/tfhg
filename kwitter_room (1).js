var firebaseConfig = {
      apiKey: "AIzaSyCQDXU0fuPsUczqe8psTHmbOOEhRjAecAA",
      authDomain: "el-xd-2fe22.firebaseapp.com",
      databaseURL: "https://el-xd-2fe22-default-rtdb.firebaseio.com",
      projectId: "el-xd-2fe22",
      storageBucket: "el-xd-2fe22.appspot.com",
      messagingSenderId: "528321317043",
      appId: "1:528321317043:web:03a9cf5e4896c0fb0f88c6",
      measurementId: "G-CBYFZCDGYE"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
     

    // Initialize Firebase
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="holaaaaaaa"+user_name;
   


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="erfdth.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }


