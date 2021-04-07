import { useContext } from 'react';
import { LogoIcon } from '@/styles/theme';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Link, Stack } from '@chakra-ui/layout';

import Head from './Head';
import { AuthContext } from '@/context/AuthContext';

const Layout = ({ children }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Head />
            <Flex flexDirection='column'>
                <Flex justify='space-between' align='center' py={4} px={8}>
                    <Stack spacing={4} isInline align='center'>
                        <LogoIcon boxSize='24px' />
                        <Link>Feedback</Link>
                        <Link>Sites</Link>
                    </Stack>
                    <Stack
                        spacing={4}
                        isInline
                        justify='flex-end'
                        align='center'
                    >
                        <Link>Account</Link>
                        <Avatar size='sm' src={user?.photoURL} />
                    </Stack>
                </Flex>
                {children}
            </Flex>
        </>
    );
};

export default Layout;
