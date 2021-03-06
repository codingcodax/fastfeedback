import { auth, getUserSites } from '@/lib/firebase-admin';

export default async ({ headers: { token } }, res) => {
    try {
        const { uid } = await auth.verifyIdToken(token);
        const sites = await getUserSites(uid);

        res.status(200).json(sites);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
