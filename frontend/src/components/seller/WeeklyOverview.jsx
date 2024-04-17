// WeeklyOverview.js
import React from 'react';

const WeeklyOverview = () => {
  // Dummy data for demonstration
  const totalRevenue = 5000;
  const averageOrderValue = 50;
  const conversionRate = 0.05;
  const customerLifetimeValue = 200;
  const topSellingItems = ['Product A', 'Product B', 'Product C'];
  const slowMovingInventory = ['Product X', 'Product Y', 'Product Z'];
  const abandonedCarts = 20;
  const recoveryEfforts = 5;

  return (
    <div className="p-4  ">
     <h1 className="text-2xl font-bold mb-4">Weekly Overview</h1>
     <div className='flex'>

{/* Sales Performance Metrics */}
<div className="bg-white p-4 shadow rounded mb-4">
  <h2 className="text-lg font-semibold mb-2">Sales Performance Metrics</h2>
  <div>Total Revenue: {totalRevenue}</div>
  <div>Average Order Value: {averageOrderValue}</div>
  <div>Conversion Rate: {conversionRate}</div>
  <div>Customer Lifetime Value: {customerLifetimeValue}</div>
  {/* Placeholder for chart */}
  <div className="mt-4 border border-gray-200 p-4 rounded">
    Sales Trend Chart (Placeholder)
  </div>
</div>

{/* Product Performance Analysis */}
<div className="bg-white p-4 shadow rounded mb-4">
  <h2 className="text-lg font-semibold mb-2">Product Performance Analysis</h2>
  <div>
    <h3 className="text-md font-semibold mb-1">Top Selling Items</h3>
    <ul>
      {topSellingItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  <div>
    <h3 className="text-md font-semibold mb-1">Slow Moving Inventory</h3>
    <ul>
      {slowMovingInventory.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  {/* Placeholder for chart */}
  <div className="mt-4 border border-gray-200 p-4 rounded">
    Product Sales Trend Chart (Placeholder)
  </div>
</div>

{/* Cart Abandonment Recovery */}
<div className="bg-white p-4 shadow rounded mb-4">
  <h2 className="text-lg font-semibold mb-2">Cart Abandonment Recovery</h2>
  <div>Abandoned Carts: {abandonedCarts}</div>
  <div>Recovery Efforts: {recoveryEfforts}</div>
  {/* Placeholder for chart */}
  <div className="mt-4 border border-gray-200 p-4 rounded">
    Abandoned Carts Trend Chart (Placeholder)
  </div>
</div>
     </div>
    </div>
  );
}

export default WeeklyOverview;
