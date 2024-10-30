import React from 'react';
import Categories from './categories/Categories';
import Values from '@/components/shared/valuesAbout/Values';
import Awards from '@/components/shared/awards/Awards';
import LatestExpertDesign from './latestExpertDesign/LatestExpertDesign';
import FAQ from './faq/FAQ';
import PricingPlan from './pricingPlan/PricingPlan';
import Products from './products/Products';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Categories></Categories>
            <Values valueClass=' justify-start  ' className=' flex-row-reverse ' ></Values>
            <Products></Products>
            <Awards className=' flex-row-reverse ' ></Awards>
            <Testimonials></Testimonials>
            <PricingPlan></PricingPlan>
            {/* TODO: next time create a new section marquee slider */}
            <FAQ></FAQ>
            <LatestExpertDesign></LatestExpertDesign>
        </>
        
    );
};

export default Home;