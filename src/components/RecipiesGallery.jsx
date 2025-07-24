import React from 'react'
import TagPill from '../utilities/TagPill'
import RecipeCard from '../utilities/RecipeCard'
import flagLeb from '../assets/flags/flagLebanon.svg'
import pasta from "../assets/recipeMid/imgi_144_recipe-2-550x690.jpg"
import Button1 from "../utilities/Button1"
const RecipiesGallery = () => {
   return (

      <section className="wrapper  pb-24 flex flex-col items-center   mb-20 relative 
         before:absolute before:content-[''] before:w-[42%] before:h-[1px] before:left-0 before:bottom-0 before:bg-gray-300
         
    
         after:absolute after:content-[''] after:w-[42%] after:h-[1px] after:right-0 after:bottom-0 after:bg-gray-300
         
      
      
      ">
         <div className="flex justify-center flex-col py-12 items-center gap-4">
            <h3 className="text-4xl font-bold">New Recipes</h3>
            <p className="text-lg">Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts.</p>


         </div>
         <div className="flex justify-center gap-3 py-5">
            <TagPill content={"All Recipes"} active={true} />
            <TagPill content={"Appetizers"} active={false} />
            <TagPill content={"Main Dishes"} active={false} />
            <TagPill content={"Desserts"} active={false} />
            <TagPill content={"Drinks"} active={false} />
            <TagPill content={"Healthy"} active={false} />
            <TagPill content={"Other Recipes"} active={false} />

         </div>
         <div className="grid grid-cols-4 gap-8 py-5" >
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />


         </div>
         <span className="      absolute -bottom-5 
         "><Button1 content={"Explore All Recipes"} bg={true} />
         </span>

      </section >

   )
}

export default RecipiesGallery