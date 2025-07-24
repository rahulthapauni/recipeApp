import React from 'react'
import Header from '../components/Header'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer'
import ExploreTag from '../components/ExploreTag'
import AddRecipeForm from '../components/AddRecipeForm'

const AddRecipe = () => {
   return (
      <>
         {/* <Header /> */}
         <PageBanner catchPhrase1={""} Heading1={"Add Recipe"} desciption1={'Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations.'} />
         <AddRecipeForm />
         <ExploreTag />
         <Footer />
      </>
   )
}

export default AddRecipe