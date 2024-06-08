// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

const firebaseConfig = {
    apiKey: "AIzaSyCByraP-SycNVXXmSUNg-jwGtKfmpVSsI8",
    authDomain: "kwitter-5fbfa.firebaseapp.com",
    databaseURL: "https://kwitter-5fbfa-default-rtdb.firebaseio.com",
    projectId: "kwitter-5fbfa",
    storageBucket: "kwitter-5fbfa.appspot.com",
    messagingSenderId: "706212409296",
    appId: "1:706212409296:web:a529a0dc0994d648a713d5",
    measurementId: "G-2S49RCFEJZ"
  };

// Inicialize o Firebase

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage*/
    localStorage.setItem("user_name", user_name);

   /* Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   window.location = "chat_room.html";
}



