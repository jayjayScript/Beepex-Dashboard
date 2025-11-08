import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01FreeIcons, Notification01Icon, Search01FreeIcons } from '@hugeicons/core-free-icons/index';
import profilePic from '@/assets/profile.png'
import { ArrowDown01 } from 'lucide-react';

const Topbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center w-full border-b border-[#EAECF0] pb-5'>
            {/* search bar */}
            <div className=' bg-[#0000000A] w-[400px] py-2 px-3 text-[#00000066] rounded-lg flex items-center gap-2 text-[14px]'>
                <HugeiconsIcon icon={Search01FreeIcons} />
                <input type="text" name="search" id="search" placeholder='Search users, transactions, redemptions...' className='w-full p-1 outline-0'/>
            </div>

            {/* Notification and profile */}
            <div className='flex items-center gap-4'>
                <div className='border border-[#EAECF0] rounded-lg p-2 items-center justify-center w-[53px] h-14'>
                    <HugeiconsIcon icon={Notification01Icon} className='mx-auto mt-1' width={30} height={30}/>
                </div>
                <div className='border border-[#EAECF0] rounded-lg p-2 flex gap-4 items-center justify-center'>
                    <img src={profilePic} alt='profile picture' width={40} height={40}/>

                    <div className=''>
                        <h2 className='text-[#324054] text-[14px] font-semibold leading-4'>Jay Smith</h2>
                        <p className='text-[#71839B] text-[12px] font-normal leading-3.5'>jaysmith12@gmail.com</p>
                    </div>

                    <HugeiconsIcon icon={ArrowDown01FreeIcons} width={18} className='ml-4' height={18} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar