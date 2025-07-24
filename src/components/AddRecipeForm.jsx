

import React, { useState } from 'react';

const FormComponent = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [ingredients, setIngredients] = useState('');
   const [steps, setSteps] = useState('');
   const [tags, setTags] = useState('');
   // const [thumbnail, setThumbnail] = useState(null);
   // const [activeTab, setActiveTab] = useState('ingredients');

   const handleFileChange = (e) => {
      setThumbnail(e.target.files[0]);
   };
   const formAlign = 'flex justify-between items-start gap-10  '
   // const tabs = [
   //    { id: 'ingredients', label: 'INGREDIENTS' },
   //    { id: 'nutritions', label: 'NUTRITIONS' },
   //    { id: 'directions', label: 'DIRECTIONS' },
   //    { id: 'media', label: 'MEDIA' }
   // ];


   return (
      <div className=" mx-auto py-30 p-6 bg-white wrapper">
         <form className=" size-full flex flex-col gap-5">
            {/* Title Field */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm font-bold text-black ">
                  TITLE
               </label>
               <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-primary focus:ring-primaryfocus:border-transparent"

               />
            </div>

            {/* Description Field with Rich Text Editor Toolbar */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm text-black font-bold mb-2">
                  Description
               </label>



               {/* Description Textarea */}
               <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"

               />
            </div>


            {/* Ingredients Field */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm text-black font-bold mb-2">
                  Ingredients
               </label>
               <input
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryfocus:border-transparent resize-none"

               />
            </div>
            {/* Steps Field */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm text-black font-bold mb-2">
                  Steps
               </label>
               <input
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryfocus:border-transparent resize-none"

               />
            </div>
            {/* Tags Field */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm text-black font-bold mb-2">
                  Tags (Comma separated)
               </label>
               <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryfocus:border-transparent resize-none"

               />
            </div>
            {/* Thumbnail Field */}
            <div className={formAlign}>
               <label className=" w-1/4 block text-sm text-black font-bold mb-2">
                  THUMBNAIL
               </label>
               <div className="justify-self-start">
                  <input
                     type="file"
                     onChange={handleFileChange}
                     accept="image/*"
                     className=" block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:file:bg-primary file:text-gray-700 hover:file:bg-primary/80 hover:file:text-white"
                  />

               </div>
            </div>


            {/* Submit Button */}
            <div>
               <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-black transition-colors"
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default FormComponent;
