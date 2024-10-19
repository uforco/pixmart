import React from 'react';
import HeadingConainer from './headingContain/HeadingConainer';
import ProductList from './productList/ProductList';
import 'font-awesome/css/font-awesome.min.css';
import ProductMarqueeSlider from '@/components/shared/productMarqueeSlider/ProductMarqueeSlider';

const page = () => {
    return (
      <div className=' mt-10 ' >
        <HeadingConainer></HeadingConainer>
        <ProductList></ProductList>
        <ProductMarqueeSlider></ProductMarqueeSlider>
      </div>
    );
};

export default page;