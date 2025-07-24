import React from 'react'
import JournalCard from '../utilities/JournalCard'

const Journal = () => {
   return (
      <section className="wrapper flex items-center justify-center flex-col py-12">
         <h3 className="text-4xl font-bold mb-4">Our Journal</h3>
         <p className="text-lg">Discover stories, tips, and trends to inspire your culinary journey and creativity!</p>

         {/* Journal galler */}
         <div className="flex gap-7 py-16">
            <JournalCard />
            <JournalCard />
            <JournalCard />
         </div>
      </section>
   )
}

export default Journal