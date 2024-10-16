import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';

const Overview = () => {
    return (
      <div className=" flex flex-col gap-6 ">
        <div>
          <HeadingPrimary className=" font-bold text-[28px] plusJakartaSans ">
            Overview
          </HeadingPrimary>
          <p className=" libreFranklin text-xl text-opionalColor ">
            With over 100+ meticulously designed components, this dashboard UI
            kit is your go-to resource for building intuitive, sleek, and user -
            friendly real estate - related websites or applications. Tailored to
            meet the unique demands of the tech industry, it combines
            functionality with cutting-edge design trends to help you launch
            your project with confidence and style.
          </p>
        </div>
        <div>
          <HeadingPrimary className=" font-bold text-xl mb-4 plusJakartaSans ">
            Pages Included:
          </HeadingPrimary>
          <div className=" overflow-hidden ">
            <ul className=" list-disc libreFranklin text-xl text-opionalColor ml-8 ">
              <li className=" marker:text-primaryColor ">Dashboard Page</li>
              <li className=" marker:text-primaryColor ">Order Page</li>
              <li className=" marker:text-primaryColor ">Property Details</li>
              <li className=" marker:text-primaryColor ">Analytics Page</li>
              <li className=" marker:text-primaryColor ">Review Page</li>
            </ul>
          </div>
        </div>
        <div>
          <HeadingPrimary className=" font-bold text-xl mb-4 plusJakartaSans ">
            Product Features:
          </HeadingPrimary>
          <div className=" overflow-hidden ">
            <ul className=" list-disc libreFranklin text-xl text-opionalColor ml-8 ">
              <li className=" marker:text-primaryColor ">Responsive Design</li>
              <li className=" marker:text-primaryColor ">
                Customizable Components
              </li>
              <li className=" marker:text-primaryColor ">
                E-commerce Pages Included
              </li>
              <li className=" marker:text-primaryColor ">
                Interactive Elements
              </li>
              <li className=" marker:text-primaryColor ">Dark Mode Option</li>
              <li className=" marker:text-primaryColor ">
                Comprehensive Documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Overview;