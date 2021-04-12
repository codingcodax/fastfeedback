import NextLink from 'next/link';
import { LogoIcon } from '@/styles/theme';
import { Flex, Link, Stack } from '@chakra-ui/layout';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Avatar } from '@chakra-ui/avatar';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <Flex
            py={4}
            px={8}
            justify='space-between'
            align='center'
            backgroundColor='white'
        >
            <Stack spacing={4} isInline align='center'>
                <NextLink href={`${user ? '/sites' : '/'}`} passHref>
                    <Link>
                        <LogoIcon boxSize='24px' />
                    </Link>
                </NextLink>
                <NextLink href='/sites' passHref>
                    <Link>Sites</Link>
                </NextLink>
                <NextLink href='/feedback' passHref>
                    <Link>Feedback</Link>
                </NextLink>
            </Stack>

            {user && (
                <NextLink href='/account' passHref>
                    <Link>
                        <Avatar size='sm' src={user?.photoURL} />
                    </Link>
                </NextLink>
            )}
        </Flex>
    );
};

export default Header;
