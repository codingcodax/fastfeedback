import { useContext } from 'react';
import { Button } from '@chakra-ui/button';

import { AuthContext } from '@/context/AuthContext';

import { GithubIcon } from '@/styles/theme';

const SignInWithGithub = () => {
    const { signInWithGithubContext } = useContext(AuthContext);

    return (
        <Button
            onClick={signInWithGithubContext}
            leftIcon={<GithubIcon />}
            mt={4}
            size='lg'
            color='white'
            backgroundColor='gray.900'
            fontWeight='medium'
            _hover={{ bg: 'gray.700' }}
            _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
        >
            Sign In With Github
        </Button>
    );
};

export default SignInWithGithub;
