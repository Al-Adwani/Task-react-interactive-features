// Components
import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setCookie={props.setCookie}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
