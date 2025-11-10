import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01FreeIcons } from '@hugeicons/core-free-icons/index'

const ReusableDropdown = ({
    options,
    onSelect,
    buttonText = 'Options',
    buttonIcon = null,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-white border border-[#EAECF0] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {buttonIcon && <span className="flex items-center">{buttonIcon}</span>}
                <span className='text-[14px] text-[#000000] font-normal leading-[22px] '>{buttonText}</span>
                <HugeiconsIcon icon={ArrowDown01FreeIcons}m size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-[161px] bg-white border border-[#DFDFDF] rounded-lg shadow-sm z-10">
                    <ul className="py-1">
                        {options.map((option, index) => (
                            <li key={index} className={`${index === options.length - 1 ? "" : "border-b border-[#00000014]"}`}>
                                <button
                                    onClick={() => handleSelect(option)}
                                    className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    {/* This renders the icon if it exists */}
                                    {option.icon && (
                                        <span className="flex items-center text-gray-600">
                                            {option.icon}
                                        </span>
                                    )}
                                    <span className='text-[#00000099] text-[12px] font-normal'>{option.label || option}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

ReusableDropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string, // Simple string option
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                icon: PropTypes.element, // Optional icon
                value: PropTypes.any // Optional value different from label
            })
        ])
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.element,
    className: PropTypes.string
}

export default ReusableDropdown