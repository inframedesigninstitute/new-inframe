'use client'
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";


export default function Blogs() {

    const [activeTab, setActiveTab] = useState('All')
    const Categories = [
        "All",
        "Education",
        "Career",
        "Facilities",
        "Alumni",
        "Curriculum",
        "Placements",
        "Faculty",
        "Student Life",
        "Video Editing",
        "BBA Course in Advertising and Marketing",
        "ws2"
    ];
    const categoryData = [
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75', heading: 'Inspiring Education' },
        { src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75', heading: 'Inspiring Education' },
    ]

    return (
        <div className="w-full ">
            <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  ">Our Blogs</h3>
            <div className="flex flex-col bg-gradient-to-tr from-red-400 via-red-200 to-red-400  mb-5 items-center gap-5 py-[40px]">
                <p className="text-center text-[28px] mb-2 text-gray-700">Discover insights, stories, and the latest updates from Inframe School</p>
                <div className="relative bg-white w-full max-w-md rounded-md">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* Search Icon (SVG) */}
                        <IoMdSearch
                            className="text-[25px] text-gray-900"
                        />
                    </span>
                    <input
                        type="search"
                        placeholder="Search..."
                        className="block w-full pl-10 text-md pr-4 py-3 rounded-md focus:outline-none focus:ring-[3px] focus:ring-red-300 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="max-w-[1320] mx-auto lg:px-6 px-3 " >
                <span className="text-[30px] border-b-[3] text-red-700">Categories </span>
                <div className="w-full scrollbar overflow-x-auto my-5">
                    <div className="flex whitespace-nowrap">
                        {Categories.map((item, index) => {
                            return (
                                <button
                                    onClick={() => setActiveTab(item)}
                                    key={index}
                                    className={`${item == activeTab ? 'bg-red-800 text-white border-red-800' : 'bg-transparent text-red-600 border-red-600'} mb-4 mx-[3px]  border-2   px-4 py-2 rounded-[5px] cursor-pointer hover:bg-red-800 hover:border-transparent hover:text-white duration-300 `}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 my-[40px]">
                    {categoryData.map((item, index) => {
                        return (
                            <div key={index} className="relative w-full max-w-sm h-[400px] rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.src})` }}
                                ></div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>

                                {/* Text Content */}
                                <div className="absolute bottom-0 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-1">Inspiring Education</h3>
                                    <p className="text-md mb-3 line-clamp-2">
                                        Discover how our modern curriculum is reshaping the way students learn in the digital age.
                                    </p>
                                    <button className="bg-white text-red-700 text-sm font-semibold px-6 w-full my-[10px] py-2 rounded hover:bg-red-700 hover:text-white transition cursor-pointer">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}