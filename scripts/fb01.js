var provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('user_birthday');
firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
//     'display': 'popup'
//   });


  function signInWithFB(){

    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      console.log('successful.', result);
      }
      // The signed-in user info.
      var user = result.user;
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
    
  }


  function signOutFB() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log('failed.', error);
      });
  }