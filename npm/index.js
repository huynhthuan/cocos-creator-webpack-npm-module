import { initializeApp } from 'firebase/app';
import {
    doc,
    onSnapshot,
    getFirestore,
    collection,
    getDocs,
    initializeFirestore,
} from 'firebase/firestore';
import _ from 'lodash';

const Firebase = {
    initializeApp,
    getFirestore,
    collection,
    getDocs,
    doc,
    onSnapshot,
    initializeFirestore,
};

const Lodash = _;

export { Firebase, Lodash };
