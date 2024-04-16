import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
        
      <h1>Orders</h1>
      <div className="h-[40vh] overflow-y-scroll ">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-gray-50 hover:bg-gray-100">
                <td className="ProductPage px-4 py-2">{order.id}</td>
                <td className="flex ProductPage px-4 py-2">
                  {order.products.length > 2 ? (
                    <>
                      <img
                        key={order.products[0].id}
                        src={order.products[0].image}
                        alt={order.products[0].title}
                        className="w-8 h-8 rounded-full"
                      />
                      <img
                        key={order.products[1].id}
                        src={order.products[1].image}
                        alt={order.products[1].title}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-xl">+</span>
                    </>
                  ) : (
                    order.products.map((product) => (
                      <img
                        key={product.id}
                        src={product.image}
                        alt={product.title}
                        className="w-8 h-8 rounded-full"
                      />
                    ))
                  )}
                </td>
                <td className="ProductPage px-4 py-2">
                  {order.products.map((product, index) => (
                    <span className="" key={product.id}>
                      {product.title}
                      {index !== order.products.length - 1 && ", "}
                    </span>
                  ))}
                </td>
                <td className="ProductPage px-4 py-2">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
