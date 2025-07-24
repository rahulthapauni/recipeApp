import React from 'react'
import bg from "../assets/section-bg.jpg"
import { FaStar } from 'react-icons/fa'
import Button1 from '../utilities/Button1'
const Discover2 = () => {
   return (



      <section
         style={{
            backgroundImage: `url(${bg})`

         }}

         className="wrapper bg-center  bg-no-repeat  rounded-2xl flex justify-end-safe items-center py-20 w-full px-10 mb-12 " >
         <div className="flex flex-col gap-5 w-1/2">
            <div className="flex  items-center gap-2  ">
               <div className="flex items-center gap-3 bg-yellow-50 rounded-4xl px-2 py-1">
                  <FaStar className="text-yellow-400 text-lg " />
                  <p className="font-semibold text-md ">5.0</p>
               </div>
               <p className=" text-lg">score from 10.000 rating</p>





            </div>
            <h2 className="text-5xl/tight  text-black font-bold lh">Discover fresh and easy recipes to inspire your meals every day.</h2>
            <p className="text-lg mt-5 mb-8">Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!</p>
            <Button1 content={'View Recipes'} />

         </div >
      </ section >
   )
}

export default Discover2