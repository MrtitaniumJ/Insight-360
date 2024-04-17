import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const Product = () => {
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

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
  

  return (
    <div className="p-4 w-full">
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold font-serif pb-4">All Products</h1>
        <div className="overflow-y-scroll h-[75vh]">
          {error ? (
            <div>Error: {error}</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Brand</th>
                  <th className="px-4 py-2">Item Name</th>
                  <th className="px-4 py-2">Item Details</th>
                  <th className="px-4 py-2">Item Quantity</th>
                  <th className="px-4 py-2">Images</th>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Item Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((Product) => (
                  <tr key={Product._id} className="text-center bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-2">{Product._id}</td>
                    <td className="px-4 py-2">{Product.productName}</td>
                    <td className="px-4 py-2">{Product.category}</td>
                    <td className="px-4 py-2">{Product.brand}</td>
                    <td className="px-4 py-2">{Product.itemName}</td>
                    <td className="px-4 py-2">{Product.itemDetails}</td>
                    <td className="px-4 py-2">{Product.totalQuantity}</td>
                    <td className="px-4 py-2">{Product.images}</td>
                    <td className="px-4 py-2">{Product.company}</td>
                    <td className="px-4 py-2">{Product.price}</td>
                    {/* Render itemDescription properties */}
                    <td className='px-4 py-2'>
                      {Product.itemDescription && (
                        <div>
                          <p>Color: {Product.itemDescription.color}</p>
                          <p>Size: {Product.itemDescription.size}</p>
                          <p>Warranty: {Product.itemDescription.warranty ? 'Yes' : 'No'}</p>
                          <p>Available: {Product.itemDescription.available ? 'Yes' : 'No'}</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
