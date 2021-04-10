import { auth, getUserFeedbacks } from '@/lib/firebase-admin';

export default async ({ headers: { token } }, res) => {
    try {
        const { uid } = await auth.verifyIdToken(token);
        const feedbacks = await getUserFeedbacks(uid);

        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
