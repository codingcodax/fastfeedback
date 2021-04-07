import { getSAllSites } from '@/lib/firebase';

export default async (_, res) => {
    const sites = await getSAllSites();

    res.status(200).json(sites);
};
