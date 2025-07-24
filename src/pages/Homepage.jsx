import React from 'react'
import Header from '../components/Header'
import Discover from '../components/Discover'
import Recipe1 from '../components/Recipe1'
import Discover2 from '../components/Discover2'
import RecipiesGallery from '../components/RecipiesGallery'
import VideoRecipeGallery from '../components/VideoRecipeGallery'
import AttractSection from '../components/AttractSection'
import RecipeCategoryList from '../components/RecipeCategoryList'
import Journal from '../components/Journal'
import ExploreTag from '../components/ExploreTag'
import Footer from '../components/Footer'

const Homepage = () => {
   return (
      <>


         {/* <Header /> */}
         <Discover />
         <Recipe1 />
         <Discover2 />
         <RecipiesGallery />
         <VideoRecipeGallery />
         <AttractSection />
         <RecipeCategoryList />
         <Journal />
         <ExploreTag />
         <Footer />
      </>
   )
}

export default Homepage