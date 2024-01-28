import React from 'react';
import { Router } from './src/router/Router';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/util/ultil';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Router />
    </PaperProvider>
  );
}

