import { Route, Routes } from "react-router-dom"
import {
  BlackBackground,
  Footer,
  Main_menu,
  Navbar,
  NotFound,
} from "./components"
import {
  Admin,
  Category,
  Compare,
  CreateLaptop,
  CreatePhone,
  CreateTablet,
  Favorite,
  Home,
  Login,
  PersonalCabinet,
  ProductInside,
  Purchase,
  Search,
  SignUp,
} from "./pages"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="container">
      <BlackBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:subCategory/:theme" element={<Category />} />
        <Route path="/product/:category/:id" element={<ProductInside />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/cabinet" element={<PersonalCabinet />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/search/:word" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        {/*  */}
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/create/laptop" element={<CreateLaptop />} />
        <Route path="/admin/create/phone" element={<CreatePhone />} />
        <Route path="/admin/create/tablet" element={<CreateTablet />} />
      </Routes>
      <Footer />
      <Main_menu />
    </div>
  )
}

export default App
