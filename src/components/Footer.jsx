import React from 'react'

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className="text-center p-5 mt-5 border-t border-gray-100 dark:text-white dark:border-gray-500">
            ©{getYear()} GoSearch | All Rights Reserved
        </div>
    )
}

export default Footer
