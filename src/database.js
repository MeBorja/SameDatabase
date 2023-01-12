import {
    initializeApp
} from "firebase/app";
import {
    collection,
    getDocs,
    query,
    where,
    getFirestore,
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

const search = document.getElementById('block');
const inputFelt = document.getElementById('input')
const btn = document.getElementById('srcBtn')
const output = document.querySelector('.output');

output.innerHTML = "";

search.addEventListener('submit', function (e) {
    output.innerHTML = "";
    e.preventDefault();
    let reinSearch = e.target.input.value;
    e.target.reset();
    searchEngineFlokk(reinSearch)
    searchEngineReindyr(reinSearch);
    searchEngineEiere(reinSearch)
    console.log("shit clicked");
});

const reinDoc = ['flokk', 'fødselsdato', 'navn', 'serienummer'];
const flokkDoc = ['img', 'buemerke', 'eier', 'navn', 'serieinndeling', 'fylke'];
const eierDoc = ['kontakspråk', 'navn', 'personnummer', 'telefonnummer'];
const beiteDoc = ['Fylke', 'område']

function searchEngineReindyr(searchResult) {
    console.log("shit run");
    reinDoc.forEach(async dots => {
        const q = query(colRefIndividueltreinsdyr, where(dots, "==", searchResult));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            output.innerHTML += `
            <div id="card">
                <div  class="title">
                    <h1>Reindyr</h1>                
                </div>
                <div>
                    <h3>${doc.data().navn}</h1>
                </div>
                <div class="sameInfo">
                    <p>Flokk: ${doc.data().flokk}</p>
                    <p>Fødselsdato: ${doc.data().fødselsdato}</p>
                    <p>Serienummer: ${doc.data().serienummer, doc.data().flokkNummer}</p>
                </div>
            </div>
            `;
        });
    })
};

function searchEngineFlokk(searchResult) {
    console.log("shit run");
    flokkDoc.forEach(async dots => {
        const q = query(colRefFlokk, where(dots, "==", searchResult));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            output.innerHTML += `
                <div id="card">
                    <div class="imgHolder">
                        <img src="${doc.data().img}" alt="placeholder">
                    </div>
                    <div class="title">
                        <h1>Flokk</h1>
                    </div>
                    <div>
                        <h3>${doc.data().navn}</h1>
                    </div>
                    <div class="sameInfo">
                        <p>Buemerke: ${doc.data().buemerke}</p>
                        <p>Serieinndeling: ${doc.data().serieinndeling}</p>
                    </div>
                </div>
                `;
        });
    })
};

function searchEngineEiere(searchResult) {
    console.log("shit run");
    eierDoc.forEach(async dots => {
        const q = query(colRefEier, where(dots, "==", searchResult));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            output.innerHTML += `
                <div id="card">
                    <div class="title">
                        <h1>Eier</h1>
                    </div>
                    <div>
                        <h3>${doc.data().navn}</h3>
                    </div>
                    <div class="sameInfo">
                        <p>Kontakspråk: ${doc.data().kontakspråk}</p>
                        <p>Telefonnummer: ${doc.data().telefonnummer}</p>
                        <p>Personnummer: ${doc.data().personnummer}</p>
                    </div>
                </div>
                `;
        });
    })
};