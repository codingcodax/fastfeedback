import { extendTheme, Icon } from '@chakra-ui/react';

const fonts = {
    body:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

const fontWeights = {
    normal: 400,
    medium: 500,
    bold: 700,
};

const styles = {
    global: {
        'html, body': {
            bg: 'gray.100',
        },
    },
};

const theme = extendTheme({ styles, fonts, fontWeights });

/* ──────────────────────── Icons ─────────────────────── */
export const LogoIcon = (props) => (
    <Icon viewBox='0 0 46 32' {...props}>
        <path
            fill='currentColor'
            d='M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z'
        />
    </Icon>
);

export const GithubIcon = (props) => (
    <Icon
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        viewBox='0 0 24 24'
        {...props}
    >
        <defs />
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' />
    </Icon>
);

export const GoogleIcon = (props) => (
    <Icon viewBox='0 0 48 48'>
        <path
            fill='#FFC107'
            d='M43.6 20H24v8h11.3A12 12 0 1132 15l5.6-5.6A20 20 0 004 24a20 20 0 1039.6-4z'
        />
        <path
            fill='#FF3D00'
            d='M6.3 14.7l6.6 4.8a12 12 0 0119-4.5l5.7-5.6a20 20 0 00-31.3 5.3z'
        />
        <path
            fill='#4CAF50'
            d='M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0112.7 28l-6.5 5A20 20 0 0024 44z'
        />
        <path
            fill='#1976D2'
            d='M43.6 20H24v8h11.3a12 12 0 01-4 5.6l6.1 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-4z'
        />
    </Icon>
);

export default theme;
