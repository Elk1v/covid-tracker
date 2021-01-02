import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBLGFTUqQyGy17Z81mdI7CYEgAdX5B0cUs',
  authDomain: 'covid-19-tracker-11ee4.firebaseapp.com',
  databaseURL: 'https://covid-19-tracker-11ee4.firebaseio.com',
  projectId: 'covid-19-tracker-11ee4',
  storageBucket: 'covid-19-tracker-11ee4.appspot.com',
  messagingSenderId: '63054154288',
  appId: '1:63054154288:web:21eacc85659a48462fbbf5',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
