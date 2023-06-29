import Routes from "./routes/routes"
import GlobalStyle from "./styles/global"
import { ThemeProvider } from 'styled-components';
import dark from "./styles/themes/dark";

function App() {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
