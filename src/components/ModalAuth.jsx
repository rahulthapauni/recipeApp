import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx';

const ModalAuth = ({ isOpen, onClose, children }) => {

   useEffect(() => {

      if (isOpen) {
         const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
         document.body.style.overflow = "hidden"
         document.body.style.paddingRight = `${scrollBarWidth}px`;
      } else {
         document.body.style.overflow = "unset"
         document.body.style.paddingRight = `0px`;

      } return () => {
         // cleanup
         document.body.style.overflow = "unset"
         document.body.style.paddingRight = `0px`;

      };
   }, [isOpen]);

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         {/* backdrop with blur */}
         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
            {/*modal content  */}

            <div className="relative z-10 flex justify-center items-center size-full">
               <div className="relative bg-red-400 size-fit">
                  <button className="absolute right-0 -top-9 z-50 text-3xl"
                     onClick={onClose}
                  ><RxCross2 /></button>
                  {children}
               </div>
            </div>
         </div>
      </div >
   )
};







export default ModalAuth