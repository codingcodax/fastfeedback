import { extendTheme } from "@chakra-ui/react";

const fonts = {
	body:
		"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

const fontWeights = {
	normal: 400,
	medium: 500,
	bold: 700,
};

const theme = extendTheme({ fonts, fontWeights });

export default theme;
