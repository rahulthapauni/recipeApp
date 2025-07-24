import React, { useState } from "react";

const AuthComponent = () => {
   const [isSignIn, setIsSignIn] = useState(true);

   return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
         <div className="w-[700px] h-[450px] bg-white rounded-xl shadow-lg flex relative overflow-hidden">

            {/* --- SLIDER OVERLAY PANEL --- */}
            <div className={`
          absolute top-0 h-full w-1/2 transition-transform duration-500 ease-in-out
          ${isSignIn ? "translate-x-0 left-0" : "translate-x-full left-0"}
          z-20 bg-gradient-to-tr from-blue-600 via-blue-500 to-purple-400 text-white
          flex flex-col items-center justify-center px-8
        `}>
               {/* Text cross-fade animation via opacity/transition */}
               <div className="w-full relative h-40">
                  {/* Sign Up Prompt */}
                  <div className={`
              absolute inset-0 flex flex-col items-center transition-opacity duration-300
              ${isSignIn ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}>
                     <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                     <p className="mb-6 text-center">Enter your personal details and start your journey with us.</p>
                     <button
                        className="px-6 py-2 border border-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition"
                        onClick={() => setIsSignIn(false)}
                     >
                        Sign Up
                     </button>
                  </div>
                  {/* Sign In Prompt */}
                  <div className={`
              absolute inset-0 flex flex-col items-center transition-opacity duration-300
              ${isSignIn ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}>
                     <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                     <p className="mb-6 text-center">To keep connected with us <br /> please sign in with your personal info.</p>
                     <button
                        className="px-6 py-2 border border-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
                        onClick={() => setIsSignIn(true)}
                     >
                        Sign In
                     </button>
                  </div>
               </div>
            </div>

            {/* --- Forms --- */}
            <div className="w-full h-full flex">
               {/* Sign In Form */}
               <form
                  className={`
              w-1/2 h-full flex flex-col justify-center items-center px-10 bg-white relative z-10
              transition-colors duration-300
            `}
                  autoComplete="off"
                  style={{ zIndex: 10 }}
               >
                  <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
                  <input
                     type="email"
                     placeholder="Email"
                     className="mb-4 px-4 py-2 rounded-lg border w-full outline-none"
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     className="mb-4 px-4 py-2 rounded-lg border w-full outline-none"
                  />
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">
                     Sign In
                  </button>
               </form>
               {/* Sign Up Form */}
               <form
                  className={`
              w-1/2 h-full flex flex-col justify-center items-center px-10 bg-white relative z-10
              transition-colors duration-300
            `}
                  autoComplete="off"
                  style={{ zIndex: 10 }}
               >
                  <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                  <input
                     type="text"
                     placeholder="Username"
                     className="mb-4 px-4 py-2 rounded-lg border w-full outline-none"
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     className="mb-4 px-4 py-2 rounded-lg border w-full outline-none"
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     className="mb-4 px-4 py-2 rounded-lg border w-full outline-none"
                  />
                  <button type="submit" className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition">
                     Sign Up
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AuthComponent;
