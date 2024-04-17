import React, { useState, useEffect } from 'react';

const AddProductModal = ({ closeModal, addProductToTable, updateProductInTable, selectedProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        title: selectedProduct.title,
        category: selectedProduct.category,
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      // If selectedProduct exists, it means we're editing an existing product
      updateProductInTable({ ...selectedProduct, ...formData });
    } else {
      // Otherwise, we're adding a new product
      addProductToTable({
        id: Math.floor(Math.random() * 1000), // Generate a temporary ID (replace with actual ID when integrating with backend)
        ...formData,
      });
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              {selectedProduct ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
