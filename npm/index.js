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
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

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

const Redux = {
    createSlice,
    configureStore,
    combineReducers
};

const ReduxPersist = {
    persistStore,
    persistReducer,
    storage,
};

export { Firebase, Lodash, Redux, ReduxPersist };
