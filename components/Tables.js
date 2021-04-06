import { Box, Text } from '@chakra-ui/layout';

export const Th = (props) => (
    <Text
        as='th'
        px={4}
        fontSize='xs'
        fontWeight='medium'
        color='gray.500'
        textTransform='uppercase'
        {...props}
    />
);

export const Td = (props) => (
    <Box
        as='td'
        p={4}
        color='gray.500'
        borderBottom='1px solid'
        borderBottomColor='gray.100'
        {...props}
    />
);

export const Tr = (props) => (
    <Box
        as='tr'
        height='40px'
        backgroundColor='gray.50'
        borderBottom='1px solid'
        borderBottomColor='gray.200'
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        {...props}
    />
);

export const Table = (props) => (
    <Box
        as='table'
        ml={0}
        mr={0}
        textAlign='left'
        backgroundColor='white'
        boxShadow='0px 4px 10px rgba(0,0,0,0.05)'
        borderRadius={8}
        {...props}
    />
);
