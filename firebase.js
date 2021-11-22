import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAOCXnd-mE10ytmXhaH_GhyUdceZboPM6Y',
	authDomain: 'instagram-clone-2eb97.firebaseapp.com',
	projectId: 'instagram-clone-2eb97',
	storageBucket: 'instagram-clone-2eb97.appspot.com',
	messagingSenderId: '652786741237',
	appId: '1:652786741237:web:f7765c07104f3560423abc',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
