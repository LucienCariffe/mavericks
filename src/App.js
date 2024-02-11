
import './App.css';
import Header from './components/header';
import {
  createMuiTheme,
  ThemeProvider
} from '@mui/material';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0064B1'
    },
    secondary: {
      main: '#0064B1'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800
  }

})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header >
          <Header />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
