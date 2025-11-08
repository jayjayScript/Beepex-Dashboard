import React from 'react'
import { navLinks } from '@/lib/constants';
import { Link, useLocation } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import logo from '@/assets/deepex logo-08.png'

const Sidebar = () => {
    const location = useLocation();

    return (
        <div>
            <nav className='w-[268px] p-5'>
                <div className='my-5'>
                    <img src={logo} alt="beepex logo" width={228} height={48}/>
                </div>

                <ul className='space-y-4 my-10'>
                    {
                        navLinks.map((item, index) => {
                            const isActive = location.pathname === item.url;
                            
                            return (
                                <Link 
                                    key={index} 
                                    to={item.url} 
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out text-[#00000080]  ${
                                        isActive 
                                            ? "bg-[#004BF5] text-white transform scale-105" 
                                            : "hover:bg-gray-100 hover:translate-x-1"
                                    }`}
                                >
                                    <HugeiconsIcon icon={item.icon}/>
                                    <span className='text-base font-medium leading-[100%]'>{item.title}</span>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar