import { MantineThemeOverride, ColorScheme } from '@mantine/core';

export default function getMainTheme(colorScheme: ColorScheme): MantineThemeOverride {
    return {
        colorScheme,
        fontFamily: 'Open Sans, sans serif',
        fontSizes: {
            xs: '1rem',
            sm: '1.125rem',
            md: '1.25rem',
            lg: '1.365rem',
            xl: '1.5rem',
        },
        headings: {
            sizes: {
                h1: { fontSize: '3.5em' },
                h2: { fontSize: '1.75em' },
                h3: { fontSize: '1.5em' },
                h4: { fontSize: '1.25em' },
            },
        },
        breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
        },
        spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
        activeStyles: { transform: 'scale(0.95)' },
        // defaultGradient: { from: 'orange', to: 'red', deg: 45 },
        cursorType: 'pointer',
        loader: 'oval',
        colors: {
            green: ['#F0FFF4', '#C6F6D5', '#9AE6B4', '#68D391', '#48BB78', '#38A169', '#2F855A', '#276749', '#22543D', '#1C4532'],
        },
        // primaryColor: 'green',
        globalStyles: (theme) => ({
            '*, *::before, *::after': {
                boxSizing: 'border-box',
            },
            html: {
                scrollBehavior: 'smooth',
            },
            body: {
                ...theme.fn.fontStyles(),
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                lineHeight: theme.lineHeight,
            },
            h1: {
                fontSize: '2em',
            },
            h2: {
                fontSize: '1.5em',
            },
            h3: {
                fontSize: '1.17em',
            },
            '@media (max-width: 480px)': {
                body: {
                    fontSize: theme.fontSizes.xs,
                    fontWeight: 200,
                },
            },
            '@media (min-width: 768px)': {
                body: {
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 300,
                },
            },
            '@media (min-width: 1024px)': {
                body: {
                    fontSize: theme.fontSizes.md,
                    fontWeight: 400,
                },
            },
            '@media (min-width: 1184px)': {
                body: {
                    fontSize: theme.fontSizes.lg,
                    fontWeight: 500,
                },
            },
            '@media (min-width: 1440px)': {
                body: {
                    fontSize: theme.fontSizes.xl,
                    fontWeight: 600,
                },
            },
            '.section': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                // height: '100%',
                justifyContent: 'space-evenly',
                padding: '0 1rem',
                gap: '1rem',
                marginTop: '2rem',
                marginBottom: '2rem',
                [theme.fn.largerThan('md')]: {
                    marginLeft: '4rem',
                    marginRight: '4rem',
                },
            },
            '.item-enter': {
                opacity: 0,
            },
            '.item-enter-active': {
                opacity: 1,
                transition: 'opacity 500ms ease-in',
            },
            '.item-exit': {
                opacity: 1,
            },
            '.item-exit-active': {
                opacity: 0,
                transition: 'opacity 500ms ease-in',
            },
        }),
        components: {
            Button: {
                variants: {
                    danger: (theme) => ({
                        root: {
                            backgroundColor: theme.colors.red[9],
                            color: theme.colors.red[0],
                            ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
                        },
                    }),
                    success: (theme) => ({
                        root: {
                            backgroundImage: theme.fn.linearGradient(
                                45,
                                theme.colors.cyan[theme.fn.primaryShade()],
                                theme.colors.teal[theme.fn.primaryShade()],
                                theme.colors.green[theme.fn.primaryShade()]
                            ),
                            color: theme.white,
                        },
                    }),
                },
            },
        },
    };
}
