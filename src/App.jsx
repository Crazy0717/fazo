import { Route, Routes } from "react-router-dom"
import { BlackBackground, Footer, Main_menu, Navbar } from "./components"
import {
  Category,
  Compare,
  Favorite,
  Home,
  Login,
  PersonalCabinet,
  ProductInside,
  Purchase,
  SignUp,
} from "./pages"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <BlackBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:subCategory/:theme" element={<Category />} />
        <Route path="/product/:slug" element={<ProductInside />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/cabinet" element={<PersonalCabinet />} />
        <Route path="/compare" element={<Compare />} />
        Compare
      </Routes>
      <Footer />
      <Main_menu />
    </div>
  )
}

export default App
