'use client';

import { FaDownload } from "react-icons/fa";

export default function Download() {
    const materials = [
        {
            title: 'Graphic Design Fundamentals (PDF)',
            description: 'Learn the essential principles of graphic design.',
            link: '/uploads/graphic-design-fundamentals.pdf'
        },
        {
            title: 'UI/UX Design Guide',
            description: 'A practical guide to user interface & user experience.',
            link: '/uploads/ui-ux-guide.pdf'
        },
        {
            title: 'Color Theory Explained (PDF)',
            description: 'Master the art of color usage in visual design.',
            link: '/uploads/color-theory.pdf'
        },
        {
            title: 'Typography Essentials',
            description: 'Explore the importance of type in design.',
            link: '/uploads/typography-essentials.pdf'
        },
        {
            title: 'Color Theory Explained (PDF)',
            description: 'Master the art of color usage in visual design.',
            link: '/uploads/color-theory.pdf'
        },
        {
            title: 'Typography Essentials',
            description: 'Explore the importance of type in design.',
            link: '/uploads/typography-essentials.pdf'
        },
    ];

    return (
        <div className="w-full bg-gray-50 min-h-screen py-12">
            <div className="max-w-[1320px] mx-auto px-6">
                <div className="mb-[60px]">
                    <h2 className="text-3xl lg:text-4xl font-bold  mb-4 text-red-700">Download Section 1</h2>
                    <p className=" text-gray-600 mb-10">
                        Enhance your skills with our curated resources designed for students in the fields of art, design, and business. These downloadable materials are free and updated regularly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        {materials.map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
                                <div className="text-red-600 text-2xl">
                                    <FaDownload />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                                    <a
                                        href={item.link}
                                        download
                                        className="inline-block text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md transition"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <h2 className="text-3xl lg:text-4xl font-bold  mb-4 text-red-700">Download Section 2</h2>
                    <p className=" text-gray-600 mb-10">
                        Enhance your skills with our curated resources designed for students in the fields of art, design, and business. These downloadable materials are free and updated regularly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        {materials.map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
                                <div className="text-red-600 text-2xl">
                                    <FaDownload />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                                    <a
                                        href={item.link}
                                        download
                                        className="inline-block text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md transition"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
