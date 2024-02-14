import React from 'react';
import Drawer from '../../components/common/Drawer/Drawer';
import Hero from '../../containers/components/Hero';
import BlogGrid from '../../pages/Blog/BlogGrid';

const Home: React.FC = () => {
  return (
    <div className='page-home'>
      <Drawer/>
      <Hero/>
      <BlogGrid/>
    </div>
  );
};

export default Home;
