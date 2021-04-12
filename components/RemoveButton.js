import { useContext, useRef, useState } from 'react';
import { mutate } from 'swr';
import { Button, IconButton } from '@chakra-ui/button';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
} from '@chakra-ui/modal';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/toast';

import { deleteFeedback } from '@/lib/firebase';

import { AuthContext } from '@/context/AuthContext';

const RemoveButton = ({ feedbackId }) => {
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = useRef();
    const onClose = () => setIsOpen(false);
    const toast = useToast();

    const onClick = async () => {
        try {
            onClose();
            mutate(
                ['/api/feedback', user.za],
                async (data) => {
                    return data.filter(
                        (feedback) => feedback.id !== feedbackId
                    );
                },
                false
            );
            await deleteFeedback(feedbackId);
            toast({
                title: `Feedback removed successfully.`,
                status: 'success',
                position: 'bottom-left',
                duration: 5000,
                isClosable: true,
            });
            mutate(['/api/feedback', user.za]);
        } catch (err) {
            toast({
                title: `Error removing the feedback.`,
                status: 'error',
                position: 'bottom-left',
                duration: 5000,
                isClosable: true,
            });
            console.error(err);
        }
    };

    return (
        <>
            <IconButton
                aria-label='Delete feedback'
                variant='outline'
                colorScheme='red'
                icon={<DeleteIcon />}
                onClick={() => {
                    setIsOpen(true);
                }}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                motionPreset='slideInBottom'
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Feedback
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClick} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default RemoveButton;
