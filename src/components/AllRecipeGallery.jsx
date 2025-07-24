import React from 'react'
import RecipeCard from '../utilities/RecipeCard'
import flagLeb from '../assets/flags/flagLebanon.svg'
import pasta from "../assets/recipeMid/imgi_144_recipe-2-550x690.jpg"
const AllRecipeGallery = () => {
   return (
      <section className="wrapper py-10">
         <div className="grid grid-cols-4 gap-8 py-5" >
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />
            <RecipeCard flag={flagLeb} food={pasta} />


         </div>
      </section>
   )
}

export default AllRecipeGallery