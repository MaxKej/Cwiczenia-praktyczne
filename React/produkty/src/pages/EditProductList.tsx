import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import ModifyProductForm from "../components/ModifyProductForm";
import Navbar from "../components/Navbar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7064/api/product/getAll");
      setProducts(response.data);
    } catch (error) {
      console.error("An error occurred while fetching products:", error);
    }
  };

  const handleEdit = (productId: number) => {
    setEditingProductId(productId);
  };

  const handleUpdate = () => {
    setEditingProductId(null);
    fetchData();
  };

  const handleDelete = () => {
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", textAlign: "left" }}>
          {products.map((product) => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
              <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
                {editingProductId === product.id ? (
                  <ModifyProductForm product={product} onUpdate={handleUpdate} />
                ) : (
                  <ProductItem
                    product={product}
                    onDelete={handleDelete}
                    onEdit={() => handleEdit(product.id)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
