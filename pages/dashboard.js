import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboradShell';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <DashboardShell>
            {!user ? <SiteTableSkeleton /> : <EmptyState />}
        </DashboardShell>
    );
};

export default Dashboard;
