import { ChakraProvider } from '@chakra-ui/react';

import Layout from '@/components/Layout';
import AuthContextProvider from '@/context/AuthContext';

import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <AuthContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContextProvider>
        </ChakraProvider>
    );
};

export default MyApp;
