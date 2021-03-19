import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCljLX3wWYExZiIBHAaqmQ97sj96ixVzg8",
    authDomain: "pokemon-game-76e97.firebaseapp.com",
    databaseURL: "https://pokemon-game-76e97-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-76e97",
    storageBucket: "pokemon-game-76e97.appspot.com",
    messagingSenderId: "977258080793",
    appId: "1:977258080793:web:a05d6d57cebed3e8985888"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;

export const database = fire.database();

export default database;

