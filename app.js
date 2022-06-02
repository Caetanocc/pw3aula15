// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiu-C1p-ko9y7acOHcPXOA1H4w74y_wg8",
  authDomain: "etec1-43d9d.firebaseapp.com",
  projectId: "etec1-43d9d",
  storageBucket: "etec1-43d9d.appspot.com",
  messagingSenderId: "683870863325",
  appId: "1:683870863325:web:17889b939c7f1426fa4034",
  measurementId: "G-L4475VW8X5"
};
firebase.initializeApp(config);

// Firebase Variables
var auth = firebase.auth();

// on state changed
auth.onAuthStateChanged(firebaseUser => {
  // check email
  if(firebaseUser){

    currentEmail.innerHTML = auth.currentUser.email
    currentEmail.style.display = 'block';
    singoutButton.style.display = 'block';
    singupForm.style.display = 'none';
  } else{
    singoutButton.style.display = 'none';
    singupForm.style.display = 'block';
    currentEmail.style.display = 'none';
  }

});


// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// signup form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var singoutButton = document.querySelector("#signout");
var currentEmail = document.querySelector("#current-email");

var singupForm = document.querySelector("#signup-form");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var singupButton = document.querySelector("#signup");


singupButton.addEventListener("click", clickSignupButton);
singoutButton.addEventListener("click", clickSignoutButton);


function clickSignupButton(){

  //signup firebase method
  auth.createUserWithEmailAndPassword(email.value, password.value).
  then(function(user){
    console.log(auth.currentUser.email)


  }, function(error) {
    console.log(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}

function clickSignoutButton(){
  auth.signOut()
}

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// singin form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var singinButton = document.querySelector("#signin");

singinButton.addEventListener("click", clickSigninButton);


function clickSigninButton() {

  auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
  then(function(user){
    console.log(user)
  }, function(error) {
    console.log(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}
