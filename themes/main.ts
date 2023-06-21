import { MantineThemeOverride, ColorScheme } from '@mantine/core';

export default function getMainTheme(colorScheme: ColorScheme): MantineThemeOverride {
    return {
        colorScheme,
        fontFamily: 'Open Sans, sans serif',
        fontSizes: {
            xs: '0.6rem',
            sm: '0.75rem',
            md: '0.9rem',
            lg: '1rem',
            xl: '1.2rem',
        },
        headings: {
            sizes: {
                h1: { fontSize: '2em' },
                h2: { fontSize: '1.5em' },
                h3: { fontSize: '1.17em' },
            },
        },
        spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
        activeStyles: { transform: 'scale(0.95)' },
        defaultGradient: { from: 'orange', to: 'red', deg: 45 },
        cursorType: 'pointer',
        loader: 'oval',
        globalStyles: (theme) => ({
            '*, *::before, *::after': {
                boxSizing: 'border-box',
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
            '@media (max-width: 640px)': {
                body: {
                    fontSize: theme.fontSizes.xs,
                    fontWeight: 200,
                    padding: theme.spacing.xs,
                },
            },
            '@media (min-width: 640px)': {
                body: {
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 300,
                    padding: theme.spacing.sm,
                },
            },
            '@media (min-width: 768px)': {
                body: {
                    fontSize: theme.fontSizes.md,
                    fontWeight: 400,
                    padding: theme.spacing.md,
                },
            },
            '@media (min-width: 1024px)': {
                body: {
                    fontSize: theme.fontSizes.lg,
                    fontWeight: 500,
                    padding: theme.spacing.lg,
                },
            },
            '@media (min-width: 1280px)': {
                body: {
                    fontSize: theme.fontSizes.xl,
                    fontWeight: 600,
                    padding: theme.spacing.xl,
                },
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
