// src/App.tsx

import React from 'react';
import Routes from './routes/Routes';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
  );
};

export default App;
