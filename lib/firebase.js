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

/* ──────────────────────── Auth ──────────────────────── */
export const signInWithGithub = async (user) => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(githubProvider);
    createUser(formatUser(auth.currentUser.providerData[0]));
};

export const signOut = () => auth.signOut();

/* ────────────────────── Firestore ───────────────────── */
export const createUser = (data) =>
    firestore.collection('users').doc(data.uid).set(data, { merge: true });

export const createSite = async (data) => {
    const sitesRef = firestore.collection('sites');
    await sitesRef.add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        ...data,
    });
};

export const createFeedback = async (data) => {
    const feedbackRef = firestore.collection('feedback');
    await feedbackRef.add({ createdAt: createdAtWithFirebase(), ...data });
};

export default firebase;
