import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProductModal from '../modals/addProductModal';

const API_URL = 'http://localhost:3001';

const Product = () => {
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token'); // Use the correct key to retrieve the token
      if (!token) throw new Error('No token provided!');
  
      const response = await axios.get(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!Array.isArray(response.data)) {
        throw new Error('Invalid response format - products array expected');
      }

      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.response ? error.response.data.error : error.message || 'Error in fetching all products');
    }
  };

  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const addProductToTable = async (newProduct) => {
    // setProducts([...products, newProduct]);
    try {
    const token = localStorage.getItem('token'); // Use the correct key to retrieve the token
      if (!token) throw new Error('No token provided!');
  
      const response = await axios.post(`${API_URL}/addProduct`, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // if (!Array.isArray(response.data)) {
      //   throw new Error('Invalid response format - products array expected');
      // }

      setProducts([...products, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.response ? error.response.data.error : error.message || 'Error in fetching all products');
    }
  };

  const updateProductInTable = (updatedProduct) => {
    setProducts(products.map((product) => (product._id === updatedProduct._id ? updatedProduct : product)));
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`${API_URL}/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold font-serif">All Products</h1>
        <div>
          <button
            className=" py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={openModal}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-y-scroll h-[75vh]">
          {error ? (
            <div>Error: {error}</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border">
                  <th className=" py-2">ID</th>
                  <th className=" py-2">Product Name</th>
                  <th className=" py-2">Category</th>
                  <th className=" py-2">Brand</th>
                  <th className=" py-2">Item Name</th>
                  <th className=" py-2">Item Details</th>
                  <th className=" py-2">Item Quantity</th>
                  <th className=" py-2">Images</th>
                  <th className=" py-2">Company</th>
                  <th className=" py-2">Price</th>
                  <th className=" py-2">Item Description</th>
                  <th className=" py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="text-center text-xs bg-gray-50 hover:bg-gray-100">
                    <td className=" py-2">{product._id}</td>
                    <td className=" py-2">{product.productName}</td>
                    <td className=" py-2">{product.category}</td>
                    <td className=" py-2">{product.brand}</td>
                    <td className=" py-2">{product.itemName}</td>
                    <td className=" py-2">{product.itemDetails}</td>
                    <td className=" py-2">{product.totalQuantity}</td>
                    <td className=" py-2"><img className='w-10' src={product.images} alt="" /></td>
                    <td className=" py-2">{product.company}</td>
                    <td className=" py-2">{product.price}</td>
                    <td className=" py-2">
                      {product.itemDescription && (
                        <div>
                          <p>Color: {product.itemDescription.color}</p>
                          <p>Size: {product.itemDescription.size}</p>
                          <p>Warranty: {product.itemDescription.warranty ? 'Yes' : 'No'}</p>
                          <p>Available: {product.itemDescription.available ? 'Yes' : 'No'}</p>
                        </div>
                      )}
                    </td>
                    <td className=" py-2">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
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

export default Product;
