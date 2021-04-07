import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children, data }) => {
    return (
        <Flex p={8} height='92vh' backgroundColor='gray.100'>
            <Flex
                direction='column'
                justify='flex-start'
                align='stretch'
                ml='auto'
                mr='auto'
                width='100%'
                maxW='800px'
            >
                <Breadcrumb mb={2}>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink color='gray.700' fontSize='sm'>
                            Sites
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex mb={4} justifyContent='space-between'>
                    <Heading size='2xl'>My Sites</Heading>
                    {data && <AddSiteModal dashboard />}
                </Flex>
                {children}
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
