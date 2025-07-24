import React from 'react'
import tag from "../assets/food-icons/icon-pizza.svg"
const RecipeCategory = () => {

   const categoryIcon = tag;
   const categoryTag = "Appetizers";
   const categoryRecipeTotal = 2;
   const recipePara = (categoryRecipeTotal > 1) ? `${categoryRecipeTotal} Recipes` : `${categoryRecipeTotal} Recipes`;
   return (
      <div className="flex flex-col justify-center gap-2 items-center border-1 border-gray-300 rounded-2xl p-5 hover:bg-gray-300">
         <img src={categoryIcon} alt="" className="size-10 mb-3" />
         <h5 className="text-lg font-bold">{categoryTag}</h5>
         <p className="text-sm text-gray-500">{recipePara}</p>
      </div>
   )
}

export default RecipeCategory