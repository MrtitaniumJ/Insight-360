import React, { useState } from 'react';
import axios from 'axios';
import AddProductModal from '../modals/addProductModal';

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Product 2",
      category: "Category 2",
      price: 20,
      quantity: 1,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Reset selectedProduct when modal is closed
  };

  const addProductToTable = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateProductInTable = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const deleteProduct = async (productId) => {
    // try {
      // Send DELETE request to backend endpoint
      // await axios.delete(`/api/products/${productId}`);
      
      // If the request is successful, update the state to reflect the deleted product
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    // } catch (error) {
    //   console.error('Error deleting product:', error);
    // }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold font-serif">All Products</h1>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={openModal}
          >
            Add Product
          </button>
        </div>
      </div>
      <ProductTable products={products} deleteProduct={deleteProduct} handleEditClick={handleEditClick} />
      {isModalOpen && (
        <AddProductModal
          closeModal={closeModal}
          addProductToTable={addProductToTable}
          updateProductInTable={updateProductInTable}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

const ProductTable = ({ products, deleteProduct, handleEditClick }) => {
  return (
    <div className="overflow-x-auto">
      <div className="h-[78vh] overflow-y-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center bg-gray-50 hover:bg-gray-100">
                <td className="ProductPage px-4 py-2">{product.id}</td>
                <td className="ProductPage px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="ProductPage px-4 py-2">{product.title}</td>
                <td className="ProductPage px-4 py-2">{product.category}</td>
                <td className="ProductPage px-4 py-2">{product.price}</td>
                <td className="ProductPage px-4 py-2">{product.quantity}</td>
                <td className="ProductPage px-4 py-2">
                  <button onClick={() => handleEditClick(product)} className="text-blue-500 hover:text-blue-700 mr-2">
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
