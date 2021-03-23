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

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSocket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, cb) => {
        this.database.ref(`pokemons/${key}`).update({active: true}).then(() => cb())
    }

    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data)
    }
}

export default Firebase;

