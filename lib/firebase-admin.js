import admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            private_key: process.env.FIREBASE_PRIVATE_KEY,
            project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        }),
        databaseURL: process.env.DATABASE_URL,
    });
}

export const auth = admin.auth();
export const firestore = admin.firestore();

/* ────────────────────── Firestore ───────────────────── */
export const getFeedback = async (siteId) => {
    const feedbackRef = firestore.collection('feedback');

    const snapshot = await feedbackRef.where('siteId', '==', siteId).get();
    const feedback = [];

    snapshot.forEach((doc) => {
        feedback.push({ id: doc.id, ...doc.data() });
    });

    return feedback;
};

export const getUserFeedbacks = async (userId) => {
    const feedbacksRef = firestore.collection('feedback');

    const snapshot = await feedbacksRef.where('authorId', '==', userId).get();
    const feedbacks = [];

    snapshot.forEach((doc) => feedbacks.push({ id: doc.id, ...doc.data() }));

    return feedbacks;
};

export const getSAllSites = async () => {
    const sitesRef = firestore.collection('sites');
    const snapshot = await sitesRef.get();
    const sites = [];

    snapshot.forEach((doc) => sites.push({ id: doc.id, ...doc.data() }));

    return sites;
};

export const getUserSites = async (userId) => {
    const sitesRef = firestore.collection('sites');
    const snapshot = await sitesRef.where('authorId', '==', userId).get();
    const sites = [];

    snapshot.forEach((doc) => sites.push({ id: doc.id, ...doc.data() }));

    return sites;
};
