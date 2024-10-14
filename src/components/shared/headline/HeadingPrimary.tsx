import React from 'react';

const HeadingPrimary = ({children, className: classname}: {className?: string, children: React.ReactNode }) => {
    return (
        <h1 className={`${classname} font-bold plusJakartaSans text-opionalColor `} >
            {children}
        </h1>
    );
};

export default HeadingPrimary;