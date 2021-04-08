import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

import { Td, Table, Tr, Th } from './Tables';

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

const SiteTable = ({ sites }) => (
    <Table width='100%' maxW='800px'>
        <thead>
            <Tr>
                <Th>Name</Th>
                <Th>Site Link</Th>
                <Th>Feedback Link</Th>
                <Th>Date Added</Th>
            </Tr>
        </thead>
        <tbody>
            {!sites ? (
                <>
                    <SkeletonRow width='75px' />
                    <SkeletonRow width='125px' />
                    <SkeletonRow width='50px' />
                </>
            ) : (
                sites.map((site) => (
                    <Box key={site.link} as='tr'>
                        <Td>{site.name}</Td>
                        <Td>{site.link}</Td>
                        <Td>
                            <NextLink href={`/feedback/${site.id}`}>
                                <Link>View Feedback</Link>
                            </NextLink>
                        </Td>
                        <Td>
                            {new Date(
                                site.createdAt.seconds * 1000
                            ).toDateString()}
                        </Td>
                    </Box>
                ))
            )}
        </tbody>
    </Table>
);

export default SiteTable;
