
var firebaseConfig = {
    apiKey: "AIzaSyB4X6PJnCSfVdqX55VSHFjj-BdsF5Dp7tk",
    authDomain: "todolist-8ef9f.firebaseapp.com",
    databaseURL: "https://todolist-8ef9f.firebaseio.com",
    projectId: "todolist-8ef9f",
    storageBucket: "todolist-8ef9f.appspot.com",
    messagingSenderId: "104560995309",
    appId: "1:104560995309:web:5ca90d64988663fb2195e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let user = firebase.auth().currentUser;



auth.onAuthStateChanged(user => {
   if(user){
       console.log("User logged in ", user);
       window.location = "../index.html"
   }else{
       console.log("user logged out");
   }
});


const signIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 
    
    auth.signInWithEmailAndPassword(email, password).catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    })
   }

//}

const signUp = () => {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}


const signOut = () => {

    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        // window.location = "login/login.html"
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}




//Lek med tetta!

// const myUser = {
//     getId: () => sessionStorage.getItem("uid"),
//     setId: (uid)=> sessionStorage.setItem("uid", uid),
//     unset: () => sessionStorage.removeItem("uid")
// };
 
// firebase.auth().onAuthStateChanged((user) =>  {
//     if (user) {
//         let {uid} = user;
//         myUser.setId(uid);
//     } else {
//         myUser.unset();
//     }
// });
 
// saveItem = () => {
//     db.save({
//         text: "sdfsfsdf",
//         uid: myUser.getId()
//     });
// }
 
// getAll = () => {
//     db.getAll("/items", {
//         uid: myUser.getId()
//     })
// }