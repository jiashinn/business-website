import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Homepage from "./pages/Homepage";
import StylePage from "./pages/StylePage";
import ColorsPage from "./pages/ColorsPage";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "./pages/NoMatchPage.jsx";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products" element={<StylePage />} exact></Route>
          <Route path="/colors" element={<ColorsPage />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="*" element={<NoMatchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
