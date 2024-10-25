import Container from '@/components/shared/Container';
import React from 'react';
import Header from './headerSection/Header';
import DigitalAssets from './digitalAssets/DigitalAssets';
import TrendingProducts from './trendingProducts/TrendingProducts';

const Home = () => {
    return (
      <div className='  w-full ' >
        <Header></Header>
        <DigitalAssets></DigitalAssets>
        <TrendingProducts></TrendingProducts>
      </div> 
    );
};

export default Home;