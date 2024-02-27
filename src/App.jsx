import { Route, Routes } from "react-router-dom";
import { BlackBackground, Navbar } from "./components";
import {Home} from "./pages";


function App() {
  return (
    <div className="container">
      <BlackBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
