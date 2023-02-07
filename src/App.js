import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeMainPage from './HomeMainPage'
import { GlobalProvider } from './context/GlobalContext';
// import { TranslateProvider } from './context/TranslateContext';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


export default function ToggleColorMode() {
  const [splash, setSplash] = React.useState(true)

  React.useEffect(() => {
    setMode(localStorage.getItem('theme') ? (localStorage.getItem('theme')) : (localStorage.setItem('theme', 'dark'), "dark"))
    setTimeout(() => {
      setSplash(false)
    }, 1000);
  }, [])

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <HomeMainPage />
        </ThemeProvider>
      </GlobalProvider>
    </ColorModeContext.Provider>
  );
}