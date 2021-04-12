import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { formatUser } from '@/utils/firebase';
import { createdAtWithFirebase } from '@/utils/createdAt';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* ─────────────────── Firestore Refs ─────────────────── */
const sitesRef = firestore.collection('sites');
const feedbackRef = firestore.collection('feedback');

/* ──────────────────────── Auth ──────────────────────── */
export const signInWithGithub = async (user) => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(githubProvider);
    createUser(formatUser(auth.currentUser.providerData[0]));
};

export const signInWithGoogle = async (user) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
    createUser(formatUser(auth.currentUser.providerData[0]));
};

export const signOut = () => auth.signOut();

/* ────────────────────── Firestore ───────────────────── */
export const createUser = (data) =>
    firestore.collection('users').doc(data.uid).set(data, { merge: true });

export const createSite = async (data) => {
    await sitesRef.add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        ...data,
    });
};

export const createFeedback = async (data) => {
    await feedbackRef.add({ createdAt: createdAtWithFirebase(), ...data });
};

export const deleteFeedback = async (docId) => {
    await feedbackRef.doc(docId).delete();
};

export default firebase;
