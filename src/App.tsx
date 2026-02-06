
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/layout/ScrollToTop';
import AuroraBackground from './components/layout/AuroraBackground';
import ClickSpark from './components/ui/ClickSpark';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <AuroraBackground />
          <AppRoutes />
        </ClickSpark>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
