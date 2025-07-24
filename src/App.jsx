import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from "./pages/Homepage"
import Auth from "./pages/Authgood"
import Auth2 from "./pages/Auth2"
import AllRecipes from "./pages/AllRecipes"
import AddRecipe from "./pages/AddRecipe"
import Header from './components/Header'

function App() {


  return (
    <>
      {/* <Homepage /> */}

      {/* <AllRecipes /> */}

      {/* <Auth2 /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* / means defualt url homepage url */}
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/allRecipes" element={<AllRecipes />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
