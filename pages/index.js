import Head from 'next/head';
import NextLink from 'next/link';
import { useContext } from 'react';
import {
    Flex,
    Button,
    ButtonGroup,
    Heading,
    Text,
    Link,
    Stack,
} from '@chakra-ui/react';

import { AuthContext } from '@/context/AuthContext';
import { LogoIcon } from '@/styles/theme';

import SignInWithGithub from '@/components/buttons/SignInWithGithub';
import SignInWithGoogle from '@/components/buttons/SignInWithGoogle';

const Home = () => {
    const { user, signInWithGithubContext, signOutContext } = useContext(
        AuthContext
    );

    return (
        <Flex
            as='main'
            direction='column'
            align='center'
            justify='center'
            minHeight='92vh'
        >
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                                window.location.href = "/sites"
                            }
                        `,
                    }}
                />
            </Head>

            <LogoIcon boxSize='64px' />

            <Text mb={4} maxWidth='500px'>
                <Text fontWeight='bold' display='inline-block'>
                    Fast Feedback
                </Text>{' '}
                is being as part of{' '}
                <NextLink href='https://react2025.com' passHref>
                    <Link textDecoration='underline' isExternal>
                        React 2025
                    </Link>
                </NextLink>
                . It's he easiest way to add comments or reviews to your static
                site. It's still work-in-progress, but you can try out by
                logging in
            </Text>

            {!user ? (
                <Stack>
                    <SignInWithGithub /> <SignInWithGoogle />{' '}
                </Stack>
            ) : (
                <Button mt={4} size='sm' onClick={signOutContext}>
                    Sign Out
                </Button>
            )}
        </Flex>
    );
};

export default Home;
