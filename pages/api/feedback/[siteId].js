import { getFeedback } from '@/lib/firebase-admin';

export default async (req, res) => {
    try {
        const siteId = req.query.siteId;
        const feedback = await getFeedback(siteId);

        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
