import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <ThemeProvider theme={{theme}}>
=======
  <ThemeProvider theme={theme}>
>>>>>>> 4bcf432 (deploy)
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>
<<<<<<< HEAD
);
=======
);
>>>>>>> 4bcf432 (deploy)
