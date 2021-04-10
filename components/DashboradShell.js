import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';
import DashboardHeader from './DashboardHeader';

const DashboardShell = ({ children, data, breadcrumbLink, heading }) => {
    return (
        <Flex p={8} minHeight='92vh' backgroundColor='gray.100'>
            <Flex
                direction='column'
                justify='flex-start'
                align='stretch'
                ml='auto'
                mr='auto'
                width='100%'
                maxW='800px'
            >
                <DashboardHeader
                    heading={heading}
                    breadcrumbLink={breadcrumbLink}
                    data={data}
                />
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
