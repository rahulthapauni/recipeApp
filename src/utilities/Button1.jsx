import React from 'react'

const Button1 = ({ content, bg }) => {
   const classes = `rounded-lg px-6 py-3 w-fit text-sm font-bold 
   ${bg ? "bg-white border-gray-300   border-1 " : "bg-gray-300"} 
         hover:cursor-pointer  hover:bg-primary hover:text-white transition duration-200
       
         `;
   return (

      <button className={classes} >
         {content}</button>
   )
}

export default Button1