import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider, Container, MantineProvider, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Header from '../components/Header';
import { ThemeProvider, useTheme } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'theme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const { setTheme } = useTheme();

  const toggleColorScheme = (value?: ColorScheme) => {

    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ThemeProvider  attribute='class'>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
          }}
        >
          <Container size="lg">
            <Header />
            <Component {...pageProps} />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}
