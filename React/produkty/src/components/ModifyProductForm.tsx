// ModifyProductForm.tsx

import React, { useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
  onUpdate: () => void;
}

const ModifyProductForm: React.FC<Props> = ({ product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7064/api/product/update", updatedProduct);
      onUpdate();
    } catch (error) {
      console.error("An error occurred while updating product:", error);
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "20px", maxWidth: "400px" }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "5px" }}>
        <label>ID:</label><br />
        <input type="number" name="id" value={updatedProduct.id} readOnly /><br />
        <label>Nazwa:</label><br />
        <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} required /><br />
        <label>Opis:</label><br />
        <textarea name="description" value={updatedProduct.description} onChange={handleChange} required /><br />
        <label>Cena (w PLN):</label><br />
        <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} step="0.01" required /><br /><br />
        <button type="submit">Modify</button>
      </form>
    </div>
  );
};

export default ModifyProductForm;
