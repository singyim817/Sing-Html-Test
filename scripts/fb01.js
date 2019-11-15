var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //   firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

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