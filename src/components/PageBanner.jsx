import React from 'react'
import bg from '../assets/banner_bg.svg';
// import { bottom } from '@popperjs/core';

const PageBanner = ({ catchPhrase1, Heading1, desciption1 }) => {

   const catchPhrase = catchPhrase1 ?? "Recipes for Every Taste"
   const Heading = Heading1 ?? "Recipes"
   const desciption = desciption1 ?? "Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to creative culinary delights, find the perfect dish to inspire your next meal!"


   return (
      <section className="w-full py-30 "
         style={{ background: `url(${bg})`, backgroundPosition: 'bottom', backgroundSize: "contain", backgroundRepeat: 'repeat-x' }}>
         <div className="wrapper flex flex-col items-center justify-center gap-6">

            <h2 className="uppercase  text-sm font-bold">{catchPhrase}</h2>
            <h3 className="text-4xl font-bold lett tracking-wide">{Heading}</h3>
            <p className="text-lg w-3/5 text-center">{desciption}</p>


         </div >


      </section >


   )
}

export default PageBanner