import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className='text-2xl'>🔍</span>
                        <span className="ml-3 text-xl">GoSearch</span>
                    </a>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar
