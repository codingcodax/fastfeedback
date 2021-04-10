import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { Flex, Heading } from '@chakra-ui/layout';

import AddSiteModal from './AddSiteModal';

const DashboardHeader = ({ heading, breadcrumbLink, data }) => {
    return (
        <>
            <Breadcrumb mb={2}>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='gray.700' fontSize='sm'>
                        {breadcrumbLink}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex mb={4} justifyContent='space-between'>
                <Heading size='2xl'>{heading}</Heading>
                {data && <AddSiteModal dashboard />}
            </Flex>
        </>
    );
};

export default DashboardHeader;
