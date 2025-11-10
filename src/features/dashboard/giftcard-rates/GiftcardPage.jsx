import ReusableHeader from '@/components/common/ReusableHeader'
import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { PlusSignFreeIcons, Search01FreeIcons } from '@hugeicons/core-free-icons/index'
import ReusableDropdown from '@/components/common/ReusableDropdown'

const GiftcardPage = () => {
    return (
        <div>
            <ReusableHeader text={"Manage current exchange rates for supported gift cards."} title={"Gift Card Rates"}
                button={<button className='bg-[#004BF5] py-[9px] pl-3 pr-5 text-[#FFFFFF] text-[14px] leading-[22px] flex gap-2 items-center rounded-lg font-normal h-[42px] cursor-pointer'> <HugeiconsIcon icon={PlusSignFreeIcons} /> Add new card</button>}
            />

            <main className='border border-[#EAECF0] rounded-lg mt-6'>
                {/* Table head */}
                <div className='flex items-center justify-between p-6 border-b border-[#EAECF0]'>
                    <h2 className='text-[18px] text-[#000000CC] font-medium leading-[100%]'>All Gift Cards</h2>
                    <div className='flex items-center justify-between gap-4'>
                        {/* search bar */}
                        <div className=' bg-[#0000000A] w-[333px] py-2 px-3 text-[#00000066] rounded-lg flex items-center gap-2 text-[14px]'>
                            <HugeiconsIcon icon={Search01FreeIcons} />
                            <input type="text" name="search" id="search" placeholder='Search for gift cards' className='w-full p-1 outline-0' />
                        </div>

                        {/* Filter Dropdowns */}
                        <ReusableDropdown
                            buttonText="More"
                            options={[
                                { label: 'Settings' },
                                { label: 'Help' }
                            ]}
                            onSelect={(option) => console.log(option)}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GiftcardPage