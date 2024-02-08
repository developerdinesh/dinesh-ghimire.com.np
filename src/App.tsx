// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
