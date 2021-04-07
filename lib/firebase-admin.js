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

export const firestore = admin.firestore();

/* ────────────────────── Firestore ───────────────────── */
export const getAllFeedback = async (siteId) => {
    const feedbackRef = firestore.collection('feedback');

    const snapshot = await feedbackRef.where('siteId', '==', siteId).get();
    const feedback = [];

    snapshot.forEach((doc) => {
        feedback.push({ id: doc.id, ...doc.data() });
    });

    return feedback;
};
