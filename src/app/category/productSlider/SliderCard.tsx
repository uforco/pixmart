import React from 'react';

const SliderCard = ({ children, className: classname }: {className?: string, children?: React.ReactNode }) => {
  return <div className={classname}>{children}</div>;
};

export default SliderCard;