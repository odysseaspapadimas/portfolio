import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider, Container, createEmotionCache, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Header from '../components/Header';
import { ThemeProvider, useTheme } from 'next-themes'
import Background from '../components/Background';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'theme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const myCache = createEmotionCache({ key: 'mantine' });


  return (
    <ThemeProvider attribute='class'>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              dark: [
                "#FFFFFF",
                "#A6A7AB",
                "#909296",
                "#5C5F66",
                "#373A40",
                "#2C2E33",
                "#25262B",
                "#1A1B1E",
                "#141517",
                "#101113",
              ]
            },
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
          }}
        >
          <Background />
          <Container size="sm">
            <Header />
            <Component {...pageProps} />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}
