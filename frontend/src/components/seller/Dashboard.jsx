import React from "react";
import OrderTable from "./OrderTable";
import D3Chart from './D3Chart';
// import GeoChart from './GeoChart';
import BarChart from "./BarChart"
//import Heatmap from './LineChart';

const Dashboard = () => {
  const orders = [
    {
      id: 1,
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          title: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 60,
    },
    {
      id: 2,
      products: [
        {
          id: 4,
          title: "Product 4",
          price: 40,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 5,
          title: "Product 5",
          price: 50,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 90,
    },
    {
      id: 1,
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          title: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 60,
    },
    {
      id: 2,
      products: [
        {
          id: 4,
          title: "Product 4",
          price: 40,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 5,
          title: "Product 5",
          price: 50,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 90,
    },
    {
      id: 1,
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          title: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 60,
    },
    {
      id: 1,
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          title: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 60,
    },
    {
      id: 1,
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          title: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 60,
    },
    {
      id: 2,
      products: [
        {
          id: 4,
          title: "Product 4",
          price: 40,
          image: "https://via.placeholder.com/50",
        },
        {
          id: 5,
          title: "Product 5",
          price: 50,
          image: "https://via.placeholder.com/50",
        },
      ],
      price: 90,
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex h-[40vh]">
        {/* <div>map1</div>
        <div>map2</div>
        <div>map3</div> */}

        <div className="w-1/3">
          <D3Chart />
          {/* <img src="https://tse1.mm.bing.net/th?id=OIP.Bf02R88SWu1h43Uwja6rcAHaDu&pid=Api&P=0&h=180" alt="" /> */}
        </div>

        <div className="w-1/3">
          {/* <GeoChart /> */}
          <BarChart/>
        </div>

        {/* <div className="w-1/3">
          <Heatmap />
        </div> */}

      </div>
      <div className="flex w-full gap-2">
        {/* <div className="p-2 basis-1/2">tab1</div> */}

        <div className="pl-4 basis-1/2"><OrderTable orders={orders} /></div>
        <div className="pr-4 basis-1/2"><OrderTable orders={orders} /></div>
      </div>
    </div>
  );
};

export default Dashboard;
