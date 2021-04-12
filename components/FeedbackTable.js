import { IconButton } from '@chakra-ui/button';
import { Box, Code } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Switch } from '@chakra-ui/switch';

import { Td, Table, Tr, Th } from './Tables';
import RemoveButton from './RemoveButton';

const SkeletonRow = ({ width }) => (
    <Box as='tr'>
        <Td>
            <Skeleton height='10px' w={width} my={4} borderRadius={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} borderRadius={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} borderRadius={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} borderRadius={4} />
        </Td>
    </Box>
);

const FeedbackTable = ({ feedbacks }) => (
    <Table width='100%' maxW='800px'>
        <thead>
            <Tr>
                <Th>Name</Th>
                <Th>Feedback</Th>
                <Th>Route</Th>
                <Th>Visible</Th>
                <Th>{''}</Th>
            </Tr>
        </thead>
        <tbody>
            {!feedbacks ? (
                <>
                    <SkeletonRow width='75px' />
                    <SkeletonRow width='125px' />
                    <SkeletonRow width='50px' />
                </>
            ) : (
                feedbacks.map((feedback) => (
                    <Box key={feedback.id} as='tr'>
                        <Td fontWeight='medium'>{feedback.author}</Td>
                        <Td>{feedback.content}</Td>
                        <Td>
                            <Code>/</Code>
                        </Td>
                        <Td>
                            <Switch
                                colorScheme='green'
                                isChecked={
                                    feedback.status === 'active' ? true : false
                                }
                                // onChange={}
                            />
                        </Td>
                        <Td>
                            <RemoveButton feedbackId={feedback.id} />
                        </Td>
                    </Box>
                ))
            )}
        </tbody>
    </Table>
);

export default FeedbackTable;
