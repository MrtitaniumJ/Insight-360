import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddOrderModal = ({ closeModal, addProductToTable }) => {
  const [orderData, setOrderData] = useState({
    customerName: "",
    salesOrder: "",
    reference: "",
    date: "",
    shipmentDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddOrder = () => {
    if (orderData.customerName && orderData.salesOrder) {
      const productMRP = parseFloat(orderData.productMRP) || 0;
      const offerPercentage = parseFloat(orderData.offerPercentage) || 0;
      const shippingCharges = parseFloat(orderData.shippingCharges) || 0;

      // Calculate the total amount
      const discountedAmount =
        productMRP - (productMRP * offerPercentage) / 100;

      const finalAmount = discountedAmount + shippingCharges;

      setOrderData((prevData) => ({
        ...prevData,
        itemDetails: {
          ...prevData.itemDetails,
          total: finalAmount.toFixed(2),
        },
      }));

      const newProduct = {
        id: new Date().getTime(),
        date: orderData.date,
        salesOrder: orderData.salesOrder,
        reference: orderData.reference,
        customerName: orderData.customerName,
        status: "Pending",
        amount: finalAmount.toFixed(2), // You may add the logic to calculate the amount based on your requirements
        invoice: `INV-${new Date().getTime()}`,
        payment: "Pending",
      };

      addProductToTable(newProduct);
      closeModal();
    }
  };

  useEffect(() => {
    // Add any additional initialization logic here
  }, []);

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="fixed inset-0 overflow-y-auto"
      overlayClassName="fixed inset-0 z-40 backdrop-filter"
    >
      <div className="bg-white w-full h-[90vh] mt-16 px-40 py-20 overflow-y-scroll ">
        <h3
          className="text-2xl font-serif text-center font-extrabold leading-6 text-gray-900"
          id="modal-headline"
        >
          Add New Order
        </h3>
        <form>
          <div className="mb-4">
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.customerName}
              onChange={handleInputChange}
            />
          </div>

          {/* Sales Order Input Field */}
          <div className="mb-4">
            <label
              htmlFor="salesOrder"
              className="block text-sm font-medium text-gray-700"
            >
              Sales Order
            </label>
            <input
              type="text"
              name="salesOrder"
              id="salesOrder"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.salesOrder}
              onChange={handleInputChange}
            />
          </div>

          {/* Reference Input Field */}
          <div className="mb-4">
            <label
              htmlFor="reference"
              className="block text-sm font-medium text-gray-700"
            >
              Reference
            </label>
            <input
              type="text"
              name="reference"
              id="reference"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.reference}
              onChange={handleInputChange}
            />
          </div>

          {/* Sales Order Date Input Field */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Sales Order Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.date}
              onChange={handleInputChange}
            />
          </div>

          {/* Expected Shipment Date Input Field */}
          <div className="mb-4">
            <label
              htmlFor="shipmentDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Shipment Date
            </label>
            <input
              type="date"
              name="shipmentDate"
              id="shipmentDate"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.shipmentDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Product MRP Input Field */}
          <div className="mb-4">
            <label
              htmlFor="productMRP"
              className="block text-sm font-medium text-gray-700"
            >
              Product MRP
            </label>
            <input
              type="number"
              name="productMRP"
              id="productMRP"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.productMRP}
              onChange={handleInputChange}
            />
          </div>

          {/* Offer Percentage Input Field */}
          <div className="mb-4">
            <label
              htmlFor="offerPercentage"
              className="block text-sm font-medium text-gray-700"
            >
              Offer Percentage
            </label>
            <input
              type="number"
              name="offerPercentage"
              id="offerPercentage"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.offerPercentage}
              onChange={handleInputChange}
            />
          </div>

          {/* Shipping Charges Input Field */}
          <div className="mb-4">
            <label
              htmlFor="shippingCharges"
              className="block text-sm font-medium text-gray-700"
            >
              Shipping Charges
            </label>
            <input
              type="number"
              name="shippingCharges"
              id="shippingCharges"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={orderData.shippingCharges}
              onChange={handleInputChange}
            />
          </div>

          {/* Upload Button */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Attach File(s)
            </label>
            <input
              type="file"
              className="mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAddOrder}
            >
              Save and Send
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-gray-500"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

AddOrderModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addProductToTable: PropTypes.func.isRequired,
};

export default AddOrderModal;
