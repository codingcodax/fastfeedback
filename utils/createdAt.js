import firebase from '@/lib/firebase';

export const createdAt = () => {
    return {
        seconds: Math.round(new Date().getTime() / 1000),
    };
};

export const createdAtWithFirebase = () =>
    firebase.firestore.FieldValue.serverTimestamp();
