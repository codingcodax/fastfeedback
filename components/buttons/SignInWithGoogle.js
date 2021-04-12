import { useContext } from 'react';
import { Button } from '@chakra-ui/button';

import { AuthContext } from '@/context/AuthContext';
import { GoogleIcon } from '@/styles/theme';

const SignInWithGoogle = () => {
    const { signInWithGoogleContext } = useContext(AuthContext);

    return (
        <Button
            onClick={signInWithGoogleContext}
            leftIcon={<GoogleIcon />}
            mt={4}
            size='lg'
            color='gray.900'
            variant='outline'
            backgroundColor='white'
            fontWeight='medium'
            _hover={{ bg: 'gray.100' }}
            _active={{ bg: 'gray.100', transform: 'scale(0.95)' }}
        >
            Sign In With Google
        </Button>
    );
};

export default SignInWithGoogle;
