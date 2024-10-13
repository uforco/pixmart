import React from 'react';

const Container = ({
  children,
  className: classname,
}: Readonly<{
  children: React.ReactNode;
  className?: string
}>) => {
  return (
    <div className={`container max-w-screen-xl mx-auto ${classname}`}>
      {children}
    </div>
  );
};

export default Container;