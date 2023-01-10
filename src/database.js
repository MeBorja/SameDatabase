import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc, deleteDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoIH5zIcis8DcTxmaF4EARB2e8l2d1lVE",
    authDomain: "samerdatabase-74167.firebaseapp.com",
    projectId: "samerdatabase-74167",
    storageBucket: "samerdatabase-74167.appspot.com",
    messagingSenderId: "1094119219895",
    appId: "1:1094119219895:web:0509cf4abb3a17bc292332"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRefEier = collection(db, 'Eier')
const colRefFlokk = collection(db, 'Flokk')
const colRefBieteområde = collection(db, 'Bieteområde')
const colRefIndividueltreinsdyr = collection(db, 'Individuelt-reinsdyr')



getDocs(colRefEier)
    .then((snapshot) => {
        let eiere = []
        snapshot.docs.forEach((doc) => {
            eiere.push({ ...doc.data(), id: doc.id})
        })
        console.log(eiere)
        console.log("Shit Works 1")
    }).catch(err => {
        console.log(err);
    })

    getDocs(colRefFlokk)
    .then((snapshot) => {
        let flokket = []
        snapshot.docs.forEach((doc) => {
            flokket.push({ ...doc.data(), id: doc.id})
        })
        console.log(flokket)
        console.log("Shit Works 2")
    }).catch(err => {
        console.log(err);
    })

    getDocs(colRefBieteområde)
    .then((snapshot) => {
        let Bieteområde = []
        snapshot.docs.forEach((doc) => {
            Bieteområde.push({ ...doc.data(), id: doc.id})
        })
        console.log(Bieteområde)
        console.log("Shit Works 3")
    }).catch(err => {
        console.log(err);
    })

    getDocs(colRefIndividueltreinsdyr)
    .then((snapshot) => {
        let reinsdyr = []
        snapshot.docs.forEach((doc) => {
            reinsdyr.push({ ...doc.data(), id: doc.id})
        })
        console.log(reinsdyr)
        console.log("Shit Works 4")
    }).catch(err => {
        console.log(err);
    })