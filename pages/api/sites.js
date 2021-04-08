import { getSAllSites } from '@/lib/firebase';

export default async (_, res) => {
    try {
        const sites = await getSAllSites();

        res.status(200).json(sites);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
