import React from "react";
// ye dashboard wali table h
// main order wali order table order ki hi file me h
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
          <tbody >
            {orders.map((order, i) => (
              <tr key={order.id} className="bg-gray-50 hover:bg-gray-100">
                <td className=" px-4 py-2">{order.id}</td>
                <td className="flex  px-4 py-2">
                  {order.products.length > 2 ? (
                    <>
                      <img
                        src={order.products[0].image}
                        alt={order.products[0].title}
                        className="w-8 h-8 rounded-full"
                      />
                      <img
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
                <td className=" px-4 py-2">
                  {order.products.map((product, index) => (
                    <span className="" key={index}>
                      {product.title}
                      {index !== order.products.length - 1 && ", "}
                    </span>
                  ))}
                </td>
                <td className=" px-4 py-2">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
