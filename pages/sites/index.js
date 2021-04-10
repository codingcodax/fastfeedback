import { useContext } from 'react';
import useSWR from 'swr';

import { fetchWithToken } from '@/utils/fetcher';
import { AuthContext } from '@/context/AuthContext';

import EmptyState from '@/components/EmptyState';
import SiteTable from '@/components/SiteTable';
import DashboardShell from '@/components/DashboradShell';

const Sites = () => {
    const { user, loading } = useContext(AuthContext);
    const { data, error } = useSWR(
        user ? ['/api/sites', user?.za] : null,
        fetchWithToken
    );

    return (
        <DashboardShell
            breadcrumbLink='Sites'
            heading='My Sites'
            data={data?.length === 0 ? false : true}
        >
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

export default Sites;
