import React from 'react'
import Tag from '../utilities/Tag'

const ExploreTag = () => {
   return (
      <section className="bg-neutral-100 py-20 ">
         <div className="wrapper flex justify-center flex-col items-center">
            <h3 className="text-4xl font-bold mb-4">Explore Popular Tags</h3>
            <p className="text-lg text-neutral-400">From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click.</p>

            {/* tag gallery */}
            <div className="flex justify-center flex-wrap py-14 gap-2 w-4/5" >
               <Tag content={"comfort food"} />
               <Tag content={"dairy-free"} />
               <Tag content={"desserts"} />
               <Tag content={"gluten-free"} />
               <Tag content={"healthy"} />
               <Tag content={"high-protein"} />
               <Tag content={"holiday"} />
               <Tag content={"kid-friendly"} />
               <Tag content={"low-carb"} />
               <Tag content={"meal prep"} />
               <Tag content={"meat"} />
               <Tag content={"one-pot"} />
               <Tag content={"quick meals"} />
               <Tag content={"spicy"} />
               <Tag content={"vegetarian"} />
               <Tag content={"video recipe"} />

            </div>

         </div>

      </section>
   )
}

export default ExploreTag