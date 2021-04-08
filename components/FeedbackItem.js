const { Heading, Box, Text, Divider } = require('@chakra-ui/layout');

const FeedbackItem = ({ author, content, createdAt }) => (
    <Box width='full' maxWidth='700px' borderRadius={4}>
        <Heading as='h3' mb={0} size='sm' color='gray.900' fontWeight='medium'>
            {author}
        </Heading>
        <Text mb={4} color='gray.500' fontSize='xs'>
            {/* {createdAt} */}
            tue 24 2021
        </Text>
        <Text color='gray.800'>{content}</Text>
        <Divider mt={6} mb={6} borderColor='gray.200' />
    </Box>
);

export default FeedbackItem;
