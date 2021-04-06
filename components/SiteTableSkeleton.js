import { Box } from '@chakra-ui/layout';

const { Skeleton } = require('@chakra-ui/skeleton');
const { Td, Table, Tr, Th } = require('./Tables');

const SkeletonRow = ({ width }) => (
    <Box as='tr'>
        <Td>
            <Skeleton height='10px' w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height='10px' w={width} my={4} />
        </Td>
    </Box>
);

const SiteTableSkeleton = ({ sites }) => (
    <Table width='100%' maxW='800px'>
        <thead>
            <Tr>
                <Th>Name</Th>
                <Th>Site Link</Th>
                <Th>Feedback Link</Th>
                <Th>Date Added</Th>
                <Th>{''}</Th>
            </Tr>
        </thead>
        <tbody>
            <SkeletonRow width='75px' />
            <SkeletonRow width='125px' />
            <SkeletonRow width='50px' />
        </tbody>
    </Table>
);

export default SiteTableSkeleton;
