// AddProductForm.tsx

import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

interface Product {
  name: string;
  description: string;
  price: number;
}

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7064/api/product/save", product);
      alert("Product saved successfully!");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("An error occurred while saving the product.");
    }
  };

  return (
    <div>
        <Navbar />
        <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", textAlign: "left" }}>
            <form
            onSubmit={handleSubmit}
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "20px",
                width: "400px",
                margin: "0 auto",
            }}
            >
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "inline-block", width: "100px" }}>Nazwa:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} required style={{ width: "calc(100% - 90px)" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "inline-block", width: "100px" }}>Opis:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required style={{ width: "calc(100% - 90px)" }} />
            </div>
            <div>
                <label style={{ display: "inline-block", width: "100px" }}>Cena (w PLN):</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required style={{ width: "calc(100% - 90px)" }} />
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>Dodaj</button>
            </form>
        </div>
        </div>
    </div>
  );
};

export default AddProductForm;
