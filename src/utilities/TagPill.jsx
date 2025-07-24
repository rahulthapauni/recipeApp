import React from 'react'
/*
const TagPill = ({ content, active }) => {


   if (active) {
      return (
         <button className="
         bg-primary transition duration-300 text-white text-xl hover:cursor-pointer font-semibold 
         h-fit px-5 py-3 rounded-full border-1 border-primary
      ">{content}</button>
      )
   } else {
      return (
         <button className="
         hover:bg-primary transition duration-300 text-black hover:text-white hover:cursor-pointer border-gray-300 text-xl font-semibold 
         h-fit px-5 py-3 rounded-full border-1 hover:border-primary
      ">{content}</button>
      )
   }
}
export default TagPill; */


const TagPill = ({ content, active }) => {
   const classes = `
      transition duration-300 text-lg font-semibold 
      h-fit px-5 py-3 rounded-full border-1 hover:cursor-pointer
      ${active
         ? 'bg-primary text-white border-primary'
         : 'text-black border-gray-300 hover:bg-primary hover:text-white hover:border-primary'}
   `;

   return <button className={classes}>{content}</button>;
};
export default TagPill; 
