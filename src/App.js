import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import { useState } from "react";
import DetailProduct from "./components/DetailProduct";

function App() {
  const [cookie, setCookie] = useState({
    name: "Chocolate Chip Cookie",
    price: 10,
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    describtion: "Best Selling",
  });
  const [Theme, setTheme] = useState("lightTheme");
  return (
    <div className={Theme}>
      <Home setTheme={setTheme} Theme={Theme} />
      <ProductList setCookie={setCookie} />
      <DetailProduct cookie={cookie} />
    </div>
  );
}

export default App;
