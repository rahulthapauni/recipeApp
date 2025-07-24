import React from 'react'
import im from "../assets/post/imgi_141_post-1-800x520.jpg"
import { CiClock2 } from 'react-icons/ci';
import { FiMessageSquare } from 'react-icons/fi';
const JournalCard = () => {

   const tag = "health";
   const image = im;
   const heading = "Power Up Your Mornings: 5 Quick and Healthy Breakfast Ideas";
   const user = "Olivia Thompson";
   const time = 7;
   const timeline = `${time} months Ago`
   const comment = 4;
   const timeRead = 5;
   return (
      <div className="flex flex-col gap-4">
         <div className="relative">
            <img src={image} alt="" className="rounded-2xl" />
            <button className="bg-primary rounded-lg uppercase text-white font-bold px-2 py-1 hover:cursor-pointer absolute top-5 left-5">{tag}</button>
         </div>
         <h5 className="font-semibold text-2xl hover:cursor-pointer hover:text-primary transition duration-200">{heading}</h5>
         <div className="flex text-sm text-gray-400 justify-start gap-10 flex-wrap items-center">
            <p className="">by <span className="text-black font-bold hover:cursor-pointer hover:text-primary transition duration-200">{user}</span></p>
            <p className="flex items-center"><CiClock2 /> {timeline}</p>
            <p className="flex items-center"><FiMessageSquare /> {comment}</p>


         </div>
         <p className="-mt-2 text-sm text-gray-400 items-center">{timeRead} Min Read</p>

      </div>
   )
}

export default JournalCard