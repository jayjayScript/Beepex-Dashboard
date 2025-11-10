import React from 'react'

function Cards({ icon, title, value, change, changeColor = "text-green-500" }) {
  return (
     <div className=" my-3  items-center justify-center bg-white rounded-xl shadow-md w-[200px] p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <img src={icon} alt="icon" className=" mb-3 w-11 h-11" />
      <p className="text-gray-500 text-sm font-semibold">{title}</p>
      <p className="text-2xl font-bold mt-1 text-gray-800">
        {value} <span className={`${changeColor} text-sm font-semibold`}>{change}</span>
      </p>
    </div>
  )
}

export default Cards
