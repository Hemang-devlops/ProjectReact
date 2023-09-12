import React, { useState } from 'react'
// import data from '../utils/site.json'

function SideBar({ handleTab }) {
    const [activeItem, setActiveItem] = useState('Concepts');
    const menuItems = [
        { id: 1, label: 'Concepts', description: 'The key learning areas in this section' },
        { id: 2, label: 'Scenarios', description: 'Potential situations that you might face.' },
        { id: 3, label: 'Resources', description: 'All instructional information to download and use' }
    ]
    const handleItemClick = (label) => {
        setActiveItem(label);
        handleTab(label);
    };

    return (
        <>
            <section className="bg-gray-100 text-black h-screen w-1/2 top-0 left-0 p-0">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`block px-4 py-6 m-0 cursor-pointer ${activeItem === item.label
                                ? 'bg-blue-300 text-white font-bold'
                                : ''
                                }`}
                            onClick={() => handleItemClick(item.label)}
                        >
                            <article>{item.label}</article>
                            <article className={`text-sm p-1 ${activeItem === item.label
                                ? 'text-gray-100'
                                : 'text-gray-400'
                                }`}>{item.description}</article>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default SideBar