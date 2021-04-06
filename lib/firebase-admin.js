import admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

if (!admin.apps.length) {
    admin.initializeApp({
        credentials: admin.credentials.cert({
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            private_key: process.env.FIREBASE_PRIVATE_KEY,
            project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        }),
        databaseURL: process.env.DATABASE_URL,
    });
}

export const firestore = admin.firestore();