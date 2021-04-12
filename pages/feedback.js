import { useContext } from 'react';
import useSWR from 'swr';

import { fetchWithToken } from '@/utils/fetcher';
import { AuthContext } from '@/context/AuthContext';

import DashboardShell from '@/components/DashboradShell';
import FeedbackTable from '@/components/FeedbackTable';

const feedback = () => {
    const { user, loading } = useContext(AuthContext);
    const { data, error } = useSWR(
        user ? ['/api/feedback', user?.za] : null,
        fetchWithToken
    );

    return (
        <DashboardShell breadcrumbLink='Feedback' heading='All Feedback'>
            {loading || !data ? (
                <FeedbackTable />
            ) : !loading && data.length !== 0 ? (
                <FeedbackTable feedbacks={data} />
            ) : (
                <EmptyState />
            )}
        </DashboardShell>
    );
};

export default feedback;
