import React, { useState } from "react";
import right from "../assets/Auth_box.jpg"
const Auth2 = () => {
   const [isSignIn, setIsSignIn] = useState(true);

   return (
      // <div className="w-full h-screen flex items-center justify-center  overflow-hidden">
      <div className="relative">
         <div className="w-[900px] h-[550px] rounded-xl shadow-lg  flex relative"
            style={{ background: `url(${right})`, backgroundPosition: "center", backgroundSize: 'cover' }}>


            {/* Right static side create */}
            <div className="absolute left-0 top-0 h-full w-1/2 flex flex-col items-center justify-center z-10  px-10">
               {isSignIn && (
                  <div className="flex justify-center flex-col gap-5 items-center">
                     <h2 className="text-3xl font-bold  text-white">Create Account</h2>
                     <button
                        className="px-6 py-3 border w-fit text-white bg-primary hover:bg-black font-bold rounded-xl hover:text-white transition border-none"
                        onClick={() => setIsSignIn(false)}
                     >Sign Up</button>
                  </div>
               )}
            </div>``
            {/* Left static side */}
            <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center z-10  px-10">
               {!isSignIn && (
                  <div className="flex justify-center flex-col gap-5 items-center">
                     <h2 className="text-3xl font-bold  text-white">Have an Account</h2>

                     <button
                        className="px-6 py-3 border w-fit text-white bg-primary hover:bg-black font-bold rounded-xl hover:text-white transition border-none"
                        onClick={() => setIsSignIn(true)}
                     >Sign In</button>

                  </div>
               )}
            </div>

            {/* Sliding panel with form */}
            <div
               className={`
               absolute top-0 left-0 h-full w-1/2          
               z-20 bg-white to-purple-400 text-black
               flex flex-col items-center justify-center px-10 select-none
               transition-transform duration-500 
               will-change-transform
               ${isSignIn ? "translate-x-full" : "translate-x-0"}  
            `}
            >


               <div className="w-full relative h-[330px]">
                  <form
                     className={`
                absolute inset-0 flex flex-col items-center transition-opacity duration-300 
                ${isSignIn ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              `}
                     autoComplete="off"
                  >
                     <h2 className="text-2xl font-bold mb-6">Sign In</h2>
                     <input
                        type="email"
                        placeholder="Email address"
                        className="mb-4 px-4 py-2 rounded-lg w-full text-black border border-gray-300 outline-none"
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 px-4 py-2 rounded-lg w-full text-black border outline-none  border-gray-300"
                     />

                     <div className="flex self-start gap-4 mb-4 mt-4 ">
                        <input type="checkbox" id="check" className="h-4 w-4 rounded-2xl " />
                        <label htmlFor="check" className="text-sm text-gray-700">Remember Me</label>
                     </div>
                     <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-black transition"
                     >Sign In</button>


                  </form>

                  <form
                     className={`
                absolute inset-0 flex flex-col items-center transition-opacity duration-300
                ${isSignIn ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
              `}
                     autoComplete="off"
                  >
                     <h2 className="text-2xl font-bold mb-6">Create Account</h2>
                     <input
                        type="text"
                        placeholder="Username"
                        className="mb-4 px-4 py-2 rounded-lg w-full text-black border border-gray-300 outline-none"
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        className="mb-4 px-4 py-2 rounded-lg w-full  border-gray-300 text-black border outline-none"
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 px-4 py-2 rounded-lg w-full  border-gray-300 text-black border outline-none"
                     />
                     <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-black transition"
                     >Sign Up</button>

                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Auth2;
