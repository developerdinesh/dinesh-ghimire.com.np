import React from 'react';
import Drawer from '../../components/common/Drawer/Drawer';

const Home: React.FC = () => {
  return (
    <div className='page-home'>
      <Drawer/>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Home;
