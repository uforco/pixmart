import React from 'react';
import Categories from './categories/Categories';
import Values from '@/components/shared/valuesAbout/Values';
import Awards from '@/components/shared/awards/Awards';
import LatestExpertDesign from './latestExpertDesign/LatestExpertDesign';

const Home = () => {
    return (
        <>
        <Categories></Categories>
        <Values valueClass=' justify-start  ' className=' flex-row-reverse ' ></Values>
        <Awards className=' flex-row-reverse ' ></Awards>
        <LatestExpertDesign></LatestExpertDesign>
        </>
        
    );
};

export default Home;