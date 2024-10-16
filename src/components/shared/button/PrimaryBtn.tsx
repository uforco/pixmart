import React from 'react';

const PrimaryBtn = ({
  children,
  className: classname,
}: {
  children: React.ReactNode  ;
  className?: string;
}) => {
  return (
    <button className={`${classname} text-white bg-primaryColor `}>
      {children}
    </button>
  );
};

export default PrimaryBtn;