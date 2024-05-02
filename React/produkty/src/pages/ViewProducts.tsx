import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Product[]>("https://localhost:7064/api/product/getall");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
        <Navbar />
        <div style={{ textAlign: "center" }}>

        <div style={{ display: "inline-block", textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
            {products.map((product) => (
                <li key={product.id} style={{ marginBottom: "10px" }}>
                <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price} PLN</p>
                </div>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
  );
};

export default ProductList;