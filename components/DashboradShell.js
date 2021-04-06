import { useContext } from 'react';
import {
    Flex,
    Link,
    Stack,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react';

import { AuthContext } from '@/context/AuthContext';
import { LogoIcon } from '@/styles/theme';

const DashboardShell = ({ children }) => {
    const { user } = useContext(AuthContext);

    return (
        <Flex flexDirection='column'>
            <Flex justify='space-between' align='center' py={4} px={8}>
                <Stack spacing={4} isInline align='center'>
                    <LogoIcon boxSize='24px' />
                    <Link>Feedback</Link>
                    <Link>Sites</Link>
                </Stack>
                <Stack spacing={4} isInline justify='flex-end' align='center'>
                    <Link>Account</Link>
                    <Avatar size='sm' src={user?.photoURL} />
                </Stack>
            </Flex>
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
                    <Heading size='2xl'>My Sites</Heading>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
