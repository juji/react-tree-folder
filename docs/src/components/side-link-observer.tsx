'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SideLinkObserver(){

  const pathname = usePathname()

  useEffect(() => {
    
    // get all heading
    const headings = document.querySelectorAll('h2[id]')

    function setActive(id: string){
      const active = document.querySelector(`.toc a.active`)
      if(active) active.classList.remove('active')

      const a = document.querySelector(`.toc a[href="#${id}"]`)
      if(!a) return;
      a.classList.add('active')
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if(!entry.isIntersecting) return;

        // console.log(entry.target)
        setActive(entry.target.id)

      })
    },{
      rootMargin: '0px 0px -80% 0px'
    });

    headings.forEach(heading => {
      observer.observe(heading);
    })

    return () => {
      observer.disconnect()  
    }

  },[pathname])

  return null;

}