import React from 'react';
import Container  from '@/components/shared/Container';
import LeftMainComtain from './leftSiteContainer/MainComtain';
import RightMainComtain from './rightSiteContainer/MainComtain';

const page = () => {
    return (
      <div className=" w-full ">
        <Container>
          <div className=" flex justify-between ">
            <div className=" w-[711px] ">
              <LeftMainComtain />
            </div>
            <div className=" w-[513px] ">
              <RightMainComtain />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default page;