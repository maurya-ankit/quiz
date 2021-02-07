import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, DarkTheme } from './theme';
import NavBar from './components/navBar'
import AutoGrid from './components/testing/quiz'
import Container from '@material-ui/core/Container';
function App() {

  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("theme") === "true" ? true : false);
  localStorage.setItem("theme", darkMode)

  // storing state value to localstorage so that theme of next visit will set accordingaly
  //in localstorage items are stored in string formate : so when retrieving checking if "true" then setting to True otherwise if null or false then false
  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : theme}>

        <NavBar themechange={setDarkMode} status={darkMode} />
        <Container maxWidth="xl" >
          <AutoGrid />
        </Container>

      </ThemeProvider>
    </>
  );
}

export default App;
