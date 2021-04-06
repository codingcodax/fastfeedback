import { Flex, Heading, Text } from '@chakra-ui/layout';

import AddSiteModal from './AddSiteModal';

const EmptyState = ({ freePlan }) => {
    return (
        <Flex
            p={16}
            backgroundColor='whiteAlpha.500'
            direction='column'
            justify='center'
            align='center'
            borderRadius='8px'
        >
            <Heading as='h2' size='md' mb={2}>
                {freePlan
                    ? 'Get feedback on your site instantanly.'
                    : "You haven't added any sites."}
            </Heading>
            <Text mb={4}>
                {freePlan
                    ? 'Start today, then grow with us 🌱'
                    : `Welcome 👋 Let's get started.`}
            </Text>
            <AddSiteModal freePlan={freePlan} />
        </Flex>
    );
};

export default EmptyState;
