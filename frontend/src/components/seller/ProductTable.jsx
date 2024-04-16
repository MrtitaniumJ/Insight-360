import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <h1>Products</h1>
      <div className="h-[40vh] overflow-y-scroll">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-gray-50 hover:bg-gray-100">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
