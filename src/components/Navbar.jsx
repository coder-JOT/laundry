import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wide">Laundry Express</div>
            <ul className="flex gap-6 text-lg">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#schedule" className="hover:underline">Schedule Pickup</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar
