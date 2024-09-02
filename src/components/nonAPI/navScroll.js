import { useState, useEffect } from "react";

export const ScrollPosition = () => {

   // Get scroll postion
   const [scrollPos, setScrollPosition] = useState(0);
   const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
   };
   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [])

   // Navbar hides logo when scroll
   const [navScroll, setNavScroll] = useState(0)
   useEffect(() => {
      if(window.matchMedia('(min-width: 1024px)').matches){
         setNavScroll(0)
      } else {
         if (scrollPos < 85) {
            setNavScroll(scrollPos)
         } else {
            setNavScroll(85)
         }
      }
   })
   return {
      'navScroll': navScroll,
      'scrollPos': scrollPos
   }
}