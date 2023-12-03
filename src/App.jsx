import "./App.scss";
import { Header, Footer } from "./components";
import { ShoppingCart, HomePage, ProductDetail, SearchResult,CheckoutPage, ErrorPage } from "../src/views";

import { Routes, Route } from "react-router-dom";
import {routes} from '../src/routes';

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.home} element={<HomePage/>} />
        <Route path={routes.cart} element={<ShoppingCart/>} />
        <Route path={routes.searchResult} element={<SearchResult/>} />
        <Route path={routes.productDetail} element={<ProductDetail/>} />
        <Route path={routes.checkout} element={<CheckoutPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
