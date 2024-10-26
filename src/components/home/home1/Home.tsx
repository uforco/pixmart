import Container from '@/components/shared/Container';
import React from 'react';
import Header from './headerSection/Header';
import DigitalAssets from './digitalAssets/DigitalAssets';
import TrendingProducts from './trendingProducts/TrendingProducts';
import DigitalCollections from './digitalCollections/DigitalCollections';
import LatestProducts from './latestProducts/LatestProducts';

const Home = () => {
    return (
      <div className='  w-full ' >
        <Header></Header>
        <DigitalAssets></DigitalAssets>
        <TrendingProducts></TrendingProducts>
        <DigitalCollections></DigitalCollections>
        <LatestProducts></LatestProducts>
      </div> 
    );
};

export default Home;