import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const Customer = () => {
  const [error, setError] = useState();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem('token'); // Use the correct key to retrieve the token
      if (!token) throw new Error('No token provided!');
  
      const response = await axios.get(`${API_URL}/customers`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError(error.response ? error.response.data.error : error.message || 'Error in fetching all customers');
    }
  };
  

  return (
    <div className="p-4 w-full">
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold font-serif pb-4">All Customers</h1>
        <div className="overflow-y-scroll h-[75vh]">
          {error ? (
            <div>Error: {error}</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone Number</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Products</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((User) => (
                  <tr key={User._id} className="text-center bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-2">{User._id}</td>
                    <td className="px-4 py-2">{User.username}</td>
                    <td className="px-4 py-2">{User.email}</td>
                    <td className="px-4 py-2">{User.phoneNumber}</td>
                    <td className="px-4 py-2">{User.gender}</td>
                    <td className="px-4 py-2">{User.products}</td>
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

export default Customer;