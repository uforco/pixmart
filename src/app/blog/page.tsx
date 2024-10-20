import React from 'react';
import FeaturedArticles from './featuredArticles/FeaturedArticles';
import ReadLatestDesign from './readLatestDesign/ReadLatestDesign';
import HeadingSection from './headingSection/HeadingSection';

const page = () => {
    return (
      <div>
        <HeadingSection></HeadingSection>
        <FeaturedArticles></FeaturedArticles>
        <ReadLatestDesign></ReadLatestDesign>
      </div>
    );
};

export default page;