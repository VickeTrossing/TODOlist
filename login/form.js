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

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.alert("Välkommen");
        console.log(user);
        window.location = "../index.html";

    }else{
        window.alert("Logga in då");
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

const signUp = () => {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}




// const auth = firebase.auth();


// const signUp = () => {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");


// auth.createUserWithEmailAndPassword(email, password).catch(function(error){
//     let errorCode = error.code;
//     let errorMessage = error.message;
// });

//     // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     // promise.catch(e => alert(e.message));

//     // window.alert("Signed Up!");
// }

// const signIn = () => {

//     let email = document.getElementById("email");
//     let password = document.getElementById("password");

//     auth.signInWithEmailAndPassword(email, password).catch(function(error){
//         let errorCode = error.code;
//         let errorMessage = error.message;
//     });

//     // const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//     // promise.catch(e => alert(e.message));

//     // window.alert("Signed In! Welcome " + email);



// }

// const signOut = () => {
//     auth.signOut();
//     window.alert("Catch ya later!");
// }

// auth.onAuthStateChanged(function(user){
//     if(user){

//         let email = user.email;
//         window.alert("Active user " + email);

//     }else{
//         window.alert("No active user");
//     }
// });