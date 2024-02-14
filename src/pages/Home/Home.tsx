import React from 'react';
import Drawer from '../../components/common/Drawer/Drawer';
import Hero from '../../containers/components/Hero';

const Home: React.FC = () => {
  return (
    <div className='page-home'>
      <Drawer/>
      <Hero/>
    </div>
  );
};

export default Home;
