'use client'

import React, { useEffect } from 'react';

const ConterDomSvg = ( {children}:{children: React.ReactNode } ) => {

    useEffect(()=>{
        let colorbox = document.querySelectorAll('.hoverChangeimg')
        for(let i = 0; i < colorbox.length; i++){
            colorbox[i].addEventListener('mouseover', ()=> {
                let setpath: any = colorbox[i].children[0].children[0].querySelectorAll('path')
                for(let j = 0; j < setpath.length; j++ ){
                    setpath[j].style.fill = '#ffffff'
                }
            })
            colorbox[i].addEventListener('mouseout', ()=> {
                let setpath: any = colorbox[i].children[0].children[0].querySelectorAll('path')
                for(let j = 0; j < setpath.length; j++ ){
                    setpath[j].style.fill = '#056BF8'
                }
            })
        }
    },[])

   

    return children
};

export default ConterDomSvg;