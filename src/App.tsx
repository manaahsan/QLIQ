import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/others/Header";
import { Home } from "@/pages/Home";
import { Restaurent } from "./pages/Restaurant";
import { Stores } from "./pages/Stores";
import { ECommerce } from "./pages/ECommerce";
import { Store } from "./pages/Store";
import { ProductDetailsPage } from "./pages/ProductDetails";
import { Checkout } from "./pages/Checkout";
import OrderSuccess from "./pages/orderSuccess";

function App() {
  return (
    <>
    
      <Router>
          <nav>
        <Header />
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurent" element={<Restaurent />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/store/:id" element={<Store />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
