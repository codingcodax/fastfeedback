import NextLink from 'next/link';
import { LogoIcon } from '@/styles/theme';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Link, Stack } from '@chakra-ui/layout';

import Head from './Head';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Flex flexDirection='column'>
                <Header />
                {children}
            </Flex>
        </>
    );
};

export default Layout;
