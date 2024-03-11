import { Route, Routes } from "react-router-dom";
import { BlackBackground, Footer, Main_menu, Navbar } from "./components";
import {
  Category,
  Favorite,
  Home,
  Login,
  PersonalCabinet,
  ProductInside,
  Purchase,
  SignUp,
} from "./pages";

function App() {
  return (
    <div className="container">
      <BlackBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/product/:slug" element={<ProductInside />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/cabinet" element={<PersonalCabinet />} />
      </Routes>
      <Footer />
      <Main_menu />
    </div>
  );
}

export default App;
