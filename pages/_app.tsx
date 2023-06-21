import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useHotkeys } from '@mantine/hooks';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>Jonathan Robinson&apos;s Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
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
              // '.your-class': {
              //   backgroundColor: 'red',
              // },
              // '#your-id > [data-active]': {
              //   backgroundColor: 'pink',
              // },
            }),
          }}
        >
          <Component {...pageProps} />
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
