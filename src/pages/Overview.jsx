import React from "react";
import TransactionDetailsChart from "@/components/TransactionDetailsChart";
import Cards from "@/components/Cards";
import circleIcon from "../assets/Circle-Icon.png";
import circleIcon2 from "../assets/Circle-Icon2.png";
import circleIcon3 from "../assets/Circle-Icon3.png";
import circleIcon4 from "../assets/Circle-Icon4.png";
import ServiceDistributionChart from "@/components/serviceDistributor/ServiceDistributor";
import TransactionsTable from "@/components/TransactionsTable";
import { transactionsData } from "@/components/transactionData/transactionData";

const Overview = ({ icon, title, value, change, changeColor }) => {
  return (
    <div
      className=" rounded-xl my-3
                   bg-white/10 backdrop-blur-md border border-white/20 
                   shadow-[0_4px_20px_rgba(255,255,255,0.15)] 
                   text-sm font-medium text-white focus:outline-none 
                   focus:ring-2 focus:ring-green-400 transition-all duration-300"
    >
      <div className=" mb-4 flex border  px-2 py-1 justify-between w-full">
        <div>
          <h1 className="font-bold text-xl text-black">Welcome Back, Jay!</h1>
          <p className="text-gray-400">
            Track performance manage users, and stay ahead.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-50">
          Last 7 days
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex gap-3 ">
        <Cards
          icon={circleIcon}
          title="New Signups"
          value="2,490"
          change="+15%"
          changeColor="text-green-500"
        />

        <Cards
          icon={circleIcon2}
          title="New Signups"
          value="2,490"
          change="+15%"
          changeColor="text-green-500"
        />
        <Cards
          icon={circleIcon3}
          title="New Signups"
          value="1,490"
          change="+15%"
          changeColor="text-green-500"
        />
        <Cards
          icon={circleIcon4}
          title="New Signups"
          value="2,000"
          change="+15%"
          changeColor="text-green-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <TransactionDetailsChart />
        </div>
        <ServiceDistributionChart />
      </div>
      <TransactionsTable data={transactionsData} />
    </div>
  );
};

export default Overview;
