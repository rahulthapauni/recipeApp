import React from 'react'

import flagLeb from '../assets/flags/flagLebanon.svg'
import pasta from "../assets/recipeMid/imgi_144_recipe-2-550x690.jpg"
import VideoCard from '../utilities/VideoCard'
const VideoRecipeGallery = () => {
   return (


      <section className="wrapper">
         <div className="text-center">
            <h3 className="text-4xl font-semibold mb-3">Video Recipes</h3>
            <p className="text-lg">Watch our latest recipe videos and learn step-by-step cooking tips and techniques!.</p>


         </div>
         <div className=" grid grid-cols-4 gap-8 py-20">

            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />

            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />
            <VideoCard flag={flagLeb} food={pasta} />


         </div>
      </section>




   )
}

export default VideoRecipeGallery