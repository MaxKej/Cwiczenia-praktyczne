
import React from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
  onDelete: () => void;
  onEdit: () => void;
}

const ProductItem: React.FC<Props> = ({ product, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7064/api/product/delete/${product.id}`);
      onDelete();
    } catch (error) {
      console.error("An error occurred while deleting product:", error);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Cena: {product.price} PLN</p>
      <button onClick={handleDelete}>Usuń</button>
      <button onClick={onEdit}>Edytuj</button>
    </div>
  );
};

export default ProductItem;
