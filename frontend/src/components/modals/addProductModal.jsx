import React, { useState, useEffect } from 'react';

const AddProductModal = ({ closeModal, addProductToTable, updateProductInTable, deleteProductFromTable, selectedProduct }) => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    brand: '',
    itemName: '',
    itemDetails: '',
    totalQuantity: '',
    images: '',
    company: '',
    price: '',
    itemDescription: {
      color: '',
      size: '',
      warranty: false,
      available: false,
    }
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        productName: selectedProduct.productName,
        category: selectedProduct.category,
        brand: selectedProduct.brand,
        itemName: selectedProduct.itemName,
        itemDetails: selectedProduct.itemDetails,
        totalQuantity: selectedProduct.totalQuantity,
        images: selectedProduct.images,
        company: selectedProduct.company,
        price: selectedProduct.price,
        itemDescription: {
          ...formData.itemDescription,
          color: selectedProduct.itemDescription.color,
          size: selectedProduct.itemDescription.size,
          warranty: selectedProduct.itemDescription.warranty,
          available: selectedProduct.itemDescription.available,
        }
      });
    } else {
      setFormData({
        productName: '',
        category: '',
        brand: '',
        itemName: '',
        itemDetails: '',
        totalQuantity: '',
        images: '',
        company: '',
        price: '',
        itemDescription: {
          color: '',
          size: '',
          warranty: false,
          available: false,
        }
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        itemDescription: {
          ...formData.itemDescription,
          [name]: checked,
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      updateProductInTable({ ...selectedProduct, ...formData });
    } else {
      addProductToTable({
        _id: Math.floor(Math.random() * 1000),
        ...formData,
      });
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold ">{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="category">
              Category
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="brand">
              Brand
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="itemName">
              Item Name
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="itemDetails">
              Item Details
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="itemDetails"
              name="itemDetails"
              value={formData.itemDetails}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="totalQuantity">
              Total Quantity
            </label>
            <input
              className="w-full   border rounded"
              type="number"
              id="totalQuantity"
              name="totalQuantity"
              value={formData.totalQuantity}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="images">
              Images
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="company">
              Company
            </label>
            <input
              className="w-full   border rounded"
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold " htmlFor="price">
              Price
            </label>
            <input
              className="w-full   border rounded"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold ">
              Item Description
            </label>
            <div className="flex items-center ">
              <input
                type="checkbox"
                id="warranty"
                name="warranty"
                checked={formData.itemDescription.warranty}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="warranty" className="text-sm">
                Warranty
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="available"
                name="available"
                checked={formData.itemDescription.available}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="available" className="text-sm">
                Available
              </label>
            </div>
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={closeModal}
              className="  mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="  bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              {selectedProduct ? 'Update' : 'Add'}
            </button>
            {selectedProduct && (
              <button
                type="button"
                onClick={() => {
                  deleteProductFromTable(selectedProduct._id);
                  closeModal();
                }}
                className="  ml-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
