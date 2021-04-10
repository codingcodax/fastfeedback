import NextLink from 'next/link';
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
                        <NextLink href={`${user ? '/sites' : '/'}`}>
                            <Link>
                                <LogoIcon boxSize='24px' />
                            </Link>
                        </NextLink>
                        <NextLink href='/sites'>
                            <Link>Sites</Link>
                        </NextLink>
                        <NextLink href='/feedback'>
                            <Link>Feedback</Link>
                        </NextLink>
                    </Stack>
                    <Stack
                        spacing={4}
                        isInline
                        justify='flex-end'
                        align='center'
                    >
                        <NextLink href='/account'>
                            <Link>
                                <Avatar size='sm' src={user?.photoURL} />
                            </Link>
                        </NextLink>
                    </Stack>
                </Flex>
                {children}
            </Flex>
        </>
    );
};

export default Layout;
