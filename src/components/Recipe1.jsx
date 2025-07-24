import React from 'react'
import RecipeCard from '../utilities/RecipeCard'
import flagLeb from '../assets/flags/flagLebanon.svg'
import pasta from "../assets/recipeMid/imgi_144_recipe-2-550x690.jpg"
const Recipe1 = () => {
   return (
      <section className=" wrapper2  mt-12 py-10">
         <div className="">
            <ul className="text-neutral-400 flex gap-14 justify-center items-center text-2xl font-bold  ">
               <li className="border-b-2 py-6 text-gray-900 ">Latest Recipes</li>
               <li className="border-b-2  border-transparent hover:border-black py-6 transition duration-200 hover:text-gray-900">Most Popular Recipes</li>
               <li className="border-b-2  border-transparent hover:border-black py-6 transition duration-200 hover:text-gray-900">Fastest Recipes</li>
               <li className="border-b-2  border-transparent hover:border-black py-6 transition duration-200 hover:text-gray-900">Editor's Choice</li>
            </ul>
         </div>
         <div className="wrapper2 px-2  py-10 gap-7 grid grid-cols-5 justify-items-center items-center">
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />

         </div>

      </section>
   )
}

export default Recipe1