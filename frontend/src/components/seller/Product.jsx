import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto ">
      <h1 className="text-2xl font-bold font-serif pb-4">All Products</h1>
      <div className=" overflow-y-scroll h-[75vh]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100  border">
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
              <tr key={product.id} className="text-center bg-gray-50 hover:bg-gray-100">
                <td className="ProductPage px-4 py-2">{product.id}</td>
                <td className="ProductPage px-4 py-2 ">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-8 h-8 m-auto rounded-full"
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

const Product = () => {

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Product 1",
      category: "Category 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Product 2",
      category: "Category 2",
      price: 20,
      quantity: 1,
    },
    // Add more products as needed
  ];

  return (
    <div className="p-4 w-full">
          <ProductTable products={products} />
    </div>
  );
};

export default Product;
