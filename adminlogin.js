var firebaseConfig = {
    apiKey: "AIzaSyAvg9banrH69pM9UIxkJnAz5NH9ZzjAhvk",
    authDomain: "votingg-c7f6b.firebaseapp.com",
    databaseURL: "https://votingg-c7f6b.firebaseio.com",
    projectId: "votingg-c7f6b",
    storageBucket: "votingg-c7f6b.appspot.com",
    messagingSenderId: "412767400812",
    appId: "1:412767400812:web:5465a2b46721a8480fb949",
    measurementId: "G-B71C1SQC1B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;


    $("#btn-login").click(function(){
    var email = $("#username").val();
    var password = $("#password").val();
    if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email,password);
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Message:"+ errorMessage);

        });

    }
    else{
        window.alert("Please Verify Your Credentials!");
    }

});
