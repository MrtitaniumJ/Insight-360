import React, { useState, useRef } from "react";
import Modal from "../modals/addOrderModal";
import { IoMdPrint } from "react-icons/io";
import { useReactToPrint } from "react-to-print";

const Orders = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Order List",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dummyEntries, setDummyEntries] = useState([
    {
      id: 1,
      date: "2023-01-01",
      salesOrder: "SO-001",
      reference: "Ref-001",
      customerName: "John Doe",
      status: "Approved",
      amount: "$100.00",
      invoice: "INV-001",
      payment: "Paid",
    },
    {
      id: 2,
      date: "2023-01-05",
      salesOrder: "SO-002",
      reference: "Ref-002",
      customerName: "Jane Doe",
      status: "Pending",
      amount: "$150.00",
      invoice: "INV-002",
      payment: "Pending",
    },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProductToTable = (newProduct) => {
    setDummyEntries((prevEntries) => [...prevEntries, newProduct]);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEntries = dummyEntries.filter((entry) => {
    const matchSearchTerm =
      entry.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.salesOrder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.payment.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedOption === "all") {
      return matchSearchTerm;
    } else if (selectedOption === "approved") {
      return entry.status === "Approved" && matchSearchTerm;
    } else if (selectedOption === "pending") {
      return entry.payment === "Pending" && matchSearchTerm;
    }
    return matchSearchTerm;
  });

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full">
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-xl font-bold">Sales Orders</h1>
          <select
            className="mt-2 p-2 border border-gray-300 rounded"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="all">All Sales Orders</option>
            <option value="approved">Approved Orders</option>
            <option value="pending">Pending Orders</option>
          </select>
        </div>
        <div className="flex items-center">
          <button
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handlePrint}
          >
            <IoMdPrint className="inline" /> Order List
          </button>

          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={openModal}
          >
            Add New Product
          </button>
          <input
            type="text"
            placeholder="Search for items"
            className="p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {searchTerm && filteredEntries.length === 0 && (
        <p className="text-red-500">
          No matching orders found for "{searchTerm}".
        </p>
      )}

      <table
        ref={componentRef}
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
            <th scope="col" className=" px-4 py-2">
              Date
            </th>
            <th scope="col" className=" px-4 py-2">
              Sales Order
            </th>
            <th scope="col" className=" px-4 py-2">
              Reference
            </th>
            <th scope="col" className=" px-4 py-2">
              Customer Name
            </th>
            <th scope="col" className=" px-4 py-2">
              Status
            </th>
            <th scope="col" className=" px-4 py-2">
              Amount
            </th>
            <th scope="col" className=" px-4 py-2">
              Invoice
            </th>
            <th scope="col" className=" px-4 py-2">
              Payment
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry) => (
            <tr key={entry.id} className="bg-gray-50 hover:bg-gray-100">
              <td className="p-4">
              </td>
              <td className=" px-4 py-2">
                {entry.date}
              </td>
              <td className=" px-4 py-2">
                {entry.salesOrder}
              </td>
              <td className=" px-4 py-2">
                {entry.reference}
              </td>
              <td className=" px-4 py-2">
                {entry.customerName}
              </td>
              <td className=" px-4 py-2">
                {entry.status}
              </td>
              <td className=" px-4 py-2">
                {entry.amount}
              </td>
              <td className=" px-4 py-2">
                {entry.invoice}
              </td>
              <td className=" px-4 py-2">
                {entry.payment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          addProductToTable={handleAddProductToTable}
        />
      )}
    </div>
  );
};

export default Orders;
