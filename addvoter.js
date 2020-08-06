// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAvg9banrH69pM9UIxkJnAz5NH9ZzjAhvk",
      authDomain: "votingg-c7f6b.firebaseapp.com",
      databaseURL: "https://votingg-c7f6b.firebaseio.com",
      projectId: "votingg-c7f6b",
      storageBucket: "votingg-c7f6b.appspot.com",
      messagingSenderId: "412767400812",
      appId: "1:412767400812:web:5465a2b46721a8480fb949",
      measurementId: "G-B71C1SQC1B"
  };
  firebase.initializeApp(config);
  // Reference messages collection
  var messagesRef = firebase.database().ref('Voters');
  $('#contactForm').submit(function(e) {
    e.preventDefault();
  
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.votername').val(),
        email: $('.email').val(),
        father: $('.fathername').val(),
        uid: $('.uniqueid').val(),
        address: $('.address').val(),
        state: $('.state').val(),
        postalcode: $('.postal').val(),
        contact: $('.contactnumber').val(),
        dob: $('.dob').val(),
        district: $('.district').val(),
    });
  
    $('.success-message').show();
  
    $('#contactForm')[0].reset();
  });