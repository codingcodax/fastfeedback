import Head from 'next/head';
import { useContext } from 'react';
import { Flex, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react';

import { AuthContext } from '@/context/AuthContext';
import { LogoIcon } from '@/styles/theme';

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
            h='100vh'
        >
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                                window.location.href = "/dashboard"
                            }
                        `,
                    }}
                />
            </Head>

            <LogoIcon boxSize='64px' />

            {!user ? (
                <Button mt={4} size='sm' onClick={signInWithGithubContext}>
                    Sign In
                </Button>
            ) : (
                <Button mt={4} size='sm' onClick={signOutContext}>
                    Sign Out
                </Button>
            )}
        </Flex>
    );
};

export default Home;
