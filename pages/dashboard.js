import { useContext } from 'react';
import useSWR from 'swr';

import fetcher from 'utils/fetcher';
import { AuthContext } from '@/context/AuthContext';

import EmptyState from '@/components/EmptyState';
import SiteTable from '@/components/SiteTable';
import DashboardShell from '@/components/DashboradShell';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const { data, error } = useSWR('/api/sites', fetcher);

    return (
        <DashboardShell data={data?.length === 0 ? false : true}>
            {loading || !data ? (
                <SiteTable />
            ) : !loading && data.length !== 0 ? (
                <SiteTable sites={data} />
            ) : (
                <EmptyState />
            )}
        </DashboardShell>
    );
};

export default Dashboard;
