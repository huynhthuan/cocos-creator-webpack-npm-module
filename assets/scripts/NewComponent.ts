import npmModule from '../../npm/build/npmModule.js';
import { _decorator, Component, Prefab, Label } from 'cc';

const { ccclass, property } = _decorator;

const { Firebase, Lodash, Redux, ReduxPersist } = npmModule;

const { createSlice, configureStore, combineReducers } = Redux;
const { persistStore, persistReducer, storage } = ReduxPersist;

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: 0,
    },
    reducers: {
        addScore(state, action) {
            state.value += action.payload.score;
        },
    },
});

export const { addScore } = todosSlice.actions;

const todosReducer = todosSlice.reducer;

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let storePersist = configureStore({
    reducer: persistedReducer,
});

let persistor = persistStore(storePersist);

export const STORE = {
    storePersist,
    persistor,
};

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property(Label)
    text: Label = null;

    start() {
        console.log(npmModule);
        console.log(STORE.storePersist);

        STORE.storePersist.subscribe(() => {
            this.text.string = STORE.storePersist
                .getState()
                .todos.value.toString();
        });

        setTimeout(() => {
            STORE.persistor.flush();
        }, 2000);

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

    onClick() {
        STORE.storePersist.dispatch(
            addScore({
                score: 1,
            })
        );
    }

    update(deltaTime: number) {}
}
