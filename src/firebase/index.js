import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyATdyjoW1R9Yl7Hn6Ug0NkDMYJ4mXSnwo0',
    authDomain: 'twitter-7a265.firebaseapp.com',
    databaseURL: 'https://twitter-7a265.firebaseio.com',
    projectId: 'twitter-7a265',
    storageBucket: '',
    messagingSenderId: '291235149259',
    appId: '1:291235149259:web:e896bd3c536947fe'
  };

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export {
  provider,
  auth,
}