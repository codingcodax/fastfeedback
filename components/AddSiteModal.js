import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button } from '@chakra-ui/button';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/modal';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

import { createSite } from '@/lib/firebase';

const AddSiteModal = ({ freePlan }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => createSite(data);

    const initialRef = useRef();

    return (
        <>
            <Button
                onClick={onOpen}
                variant='solid'
                size='md'
                fontWeight='medium'
            >
                {freePlan ? 'Upgrade to Starter' : 'Add Your First Site'}
            </Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='My Site'
                                {...register('name', {
                                    required: true,
                                    maxLength: 15,
                                })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder='https://website.com'
                                {...register('link', {
                                    required: true,
                                    minLength: 12,
                                })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} color='#194d4c'>
                            Cancel
                        </Button>
                        <Button
                            color='#194d4c'
                            fontWeight='medium'
                            backgroundColor='#99fffe'
                            type='submit'
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSiteModal;
