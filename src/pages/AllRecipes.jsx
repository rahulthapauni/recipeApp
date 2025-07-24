import React from 'react'
import Header from '../components/Header'
import PageBanner from '../components/PageBanner'
import AllRecipeGallery from '../components/AllRecipeGallery'
import ExploreTag from '../components/ExploreTag'
import Footer from '../components/Footer'


const AllRecipes = () => {
   return (
      <>
         {/* <Header /> */}
         <PageBanner />
         <AllRecipeGallery />
         <ExploreTag />
         <Footer />


      </>

   )
}

export default AllRecipes