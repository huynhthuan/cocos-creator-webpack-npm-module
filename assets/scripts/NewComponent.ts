import npmModule from '../../npm/build/npmModule.js';
import { _decorator, Component, Prefab } from 'cc';

const { ccclass, property } = _decorator;

// const { Firebase, Lodash } = npmModule;

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property(Prefab)
    capsulePrefab: Prefab;

    start() {
        console.log(npmModule);

        // const firebaseConfig = {
        //     apiKey: 'AIzaSyD8Y52PWG7esClcs8Q5WTR92mN_NCoN6GM',
        //     authDomain: 'foodhubs-157a6.firebaseapp.com',
        //     projectId: 'foodhubs-157a6',
        //     storageBucket: 'foodhubs-157a6.appspot.com',
        //     messagingSenderId: '318375683097',
        //     appId: '1:318375683097:web:660e4c4c59e66f4b7f3688',
        // };

        // // Initialize Firebase
        // const {
        //     initializeApp,
        //     getFirestore,
        //     collection,
        //     getDocs,
        //     onSnapshot,
        //     doc,
        //     initializeFirestore,
        // } = Firebase;

        // const app = initializeApp(firebaseConfig);

        // const db = initializeFirestore(app, {
        //     experimentalForceLongPolling: true,
        // });

        // // const db = getFirestore(app);

        // async function getCities(db) {
        //     const citiesCol = collection(db, 'users');
        //     const citySnapshot = await getDocs(citiesCol);
        //     const cityList = citySnapshot.docs.map((doc) => doc.data());
        //     return cityList;
        // }

        // getCities(db).then((data) => console.log(data));

        // console.log(db);

        // const unsub = onSnapshot(
        //     doc(db, 'users', 'OgKn5peFbTlxXTXBf4MJ'),
        //     (doc) => {
        //         console.log('Current data: ', doc.data());
        //     }
        // );
    }

    update(deltaTime: number) {}
}
