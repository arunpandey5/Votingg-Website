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
  var messagesRef = firebase.database().ref('AddParties');
  $('#contactForm').submit(function(e) {
    e.preventDefault();
  
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        partyname: $('.partyname').val(),
        email: $('.partyemail').val(),
        founder: $('.partyfounder').val(),
        year: $('.foundedyear').val(),
        address: $('.partyaddress').val(),
        state: $('.partystate').val(),
        postalcode: $('.partypostal').val(),
        contact: $('.partycontact').val(),
    });
  
    $('.success-message').show();
  
    $('#contactForm')[0].reset();
  });