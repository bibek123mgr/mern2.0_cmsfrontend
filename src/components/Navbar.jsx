import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-white font-semibold">BookStore</Link>
                        </div>
                        <div className="md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/addbook" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
