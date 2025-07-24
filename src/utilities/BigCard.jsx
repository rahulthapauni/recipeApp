import React from 'react'
import { FaStar } from 'react-icons/fa'

const BigCard = () => {

   const firstline = 'score from 10,000 rating'
   const heading = 'Learn from the best and create culinary magic at home.'
   const description = "Get inspired by expert tips and techniques to perfect your skills. Explore recipes that help you master new dishes, adding confidence and creativity to your home cooking experience."
   const btnCon = "View Recipes"
   return (
      <div className="flex flex-col bg-zinc-500 rounded-xl w-1/2 gap-10  p-9 ">
         <div className="flex gap-4">

            <div className="flex items-center gap-3 w-fit bg-yellow-50 rounded-4xl px-3 py-1">
               <FaStar className="text-yellow-400 text-lg " />
               <p className="font-semibold text-md ">5.0</p>
            </div>
            <p className="text-white  ">{firstline}</p>
         </div>

         <h4 className="text-white text-4xl font-bold w-2/3">{heading}</h4>
         <p className=" w-2/3 text-md text-white  ">{description}</p>
         <button className=" bg-primary  hover:bg-black w-fit hover:cursor-pointer   rounded-xl text-white px-5 py-3 mb-20  ">View Recipes</button>

      </div>

   )
}

export default BigCard