import React from 'react'
import PropTypes from 'prop-types'

const ReusableHeader = ({ 
    title,
    text,
    button,
    dropdown,
    className = '' }) => {
    return (
        <div className={`w-full flex items-center justify-between ${className}`}>
            <div>
                <h1 className='text-[26px] text-[#000000] font-semibold leading-[100%] mb-3'>{title}</h1>
                <p className='text-base text-[#00000099] font-medium leading-[100%]'>{text}</p>
            </div>

            {/* Render Button or Dropdown if provided */}
            <div className='flex items-center'>
                { button && button }
                { dropdown && dropdown }
            </div>
        </div>
    )
}

ReusableHeader.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.element,
    dropdown: PropTypes.element,
    className: PropTypes.string
}

ReusableHeader.defaultProps = {
    title: '',
    text: '',
    button: null,
    dropdown: null,
    className: ''
}

export default ReusableHeader