var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
    'display': 'popup'
  });

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('successful.', result);
    // ...
  }).catch(function(error) {
      console.log('failed.', error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });