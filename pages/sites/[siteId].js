import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/toast';

import { AuthContext } from '@/context/AuthContext';

import { createFeedback } from '@/lib/firebase';
import { getFeedback, getSAllSites } from '@/lib/firebase-admin';

import FeedbackItem from '@/components/FeedbackItem';

export const getStaticPaths = async () => {
    const sites = await getSAllSites();
    const paths = sites.map((site) => ({
        params: { siteId: site.id.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const siteId = params.siteId;
    const feedback = await getFeedback(siteId);

    if (feedback.length) {
        feedback.map(
            (item) => (item.createdAt = { _seconds: item.createdAt._seconds })
        );

        feedback.sort((a, b) => {
            if (a.createdAt._seconds > b.createdAt._seconds) return 1;
            if (a.createdAt._seconds < b.createdAt._seconds) return -1;
            // a must be equal to b
            return 0;
        });
    }

    return {
        props: {
            feedback: feedback.reverse(),
        },
        revalidate: 1,
    };
};

const Feedback = ({ feedback }) => {
    const { user } = useContext(AuthContext);
    const [allFeedback, setAllFeedback] = useState(feedback || []);
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const toast = useToast();

    const onSubmit = async ({ comment }) => {
        try {
            const newFeedback = {
                author: user.providerData[0].displayName,
                authorId: user.uid,
                siteId: router.query.siteId,
                content: comment,
                provider: user.providerData[0].providerId,
                status: 'pending',
            };

            await createFeedback(newFeedback);
            toast({
                title: `Comment created successfully.`,
                status: 'success',
                position: 'bottom-left',
                duration: 5000,
                isClosable: true,
            });
            setAllFeedback((initialData) => [newFeedback, ...initialData]);
        } catch (err) {
            toast({
                title: `Error to created comment.`,
                status: 'error',
                position: 'bottom-left',
                duration: 5000,
                isClosable: true,
            });
            console.error(err);
        }
    };

    return (
        <Box
            margin='0 auto'
            width='full'
            maxWidth='700px'
            display='flex'
            flexDirection='column'
        >
            <Box as='form' onSubmit={handleSubmit(onSubmit)}>
                <FormControl my={8}>
                    <FormLabel htmlFor='comment'>Comment</FormLabel>
                    <Input
                        type='comment'
                        id='comment'
                        {...register('comment', {
                            required: true,
                            minLength: 1,
                        })}
                    />
                    <Button type='submit' fontWeight='medium'>
                        Add Comment
                    </Button>
                </FormControl>
            </Box>
            {allFeedback.length
                ? allFeedback.map((item) => (
                      <FeedbackItem key={item.id} {...item} />
                  ))
                : null}
        </Box>
    );
};

export default Feedback;
