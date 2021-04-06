import { useContext } from "react";
import { Flex, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";

import { AuthContext } from "@/context/AuthContext";
import { LogoIcon } from "@/styles/theme";

const Home = () => {
	const { user, signInWithGithub, signOut } = useContext(AuthContext);

	return (
		<Flex
			as="main"
			direction="column"
			align="center"
			justify="center"
			h="100vh"
		>
			<LogoIcon boxSize="64px" />

			{!user ? (
				<Button mt={4} size="sm" onClick={signInWithGithub}>
					Sign In
				</Button>
			) : (
				<Button mt={4} size="sm" onClick={signOut}>
					Sign Out
				</Button>
			)}
		</Flex>
	);
};

export default Home;
