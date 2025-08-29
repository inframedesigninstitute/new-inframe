'use client';
import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher, FaBookOpen, FaTrophy } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

gsap.registerPlugin(ScrollTrigger);

export default function Facility() {
    const cardsRef = useRef([]);


    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            const item = highlights[index];

            const fromX = item.id % 2 === 1 ? -100 : 100; // Left or right slide

            gsap.fromTo(
                card,
                { x: fromX, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: 'power2.out', // Smooth and natural easing
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    };

    const highlights = [
        {
            id: '1',
            heading: 'Best Faculty',
            description:
                "Learn from seasoned professionals from top design institutes. Our passionate instructors ensure you're ready for every challenge.",
            icon: <FaChalkboardTeacher />,
            src: '/bestFaculty.jpg'
        },
        {
            id: '2',
            heading: 'Best Guidance',
            description:
                'Access exclusive study resources curated by experts. Stay ahead with content tailored for NIFT, NID, NATA, and UCEED.',
            icon: <FaBookOpen />,
            src: '/bestGuidence.jpg'
        },
        {
            id: '3',
            heading: 'Best Results',
            description:
                'Join a legacy of 100% success stories. Our students make it to the top design schools — and so can you.',
            icon: <FaTrophy />,
            src: '/bestResult.JPG'
        },
    ];


    return (
        <div className="w-full lg:my-[60px] my-[30px] bg-[#f8f8f8] ">

            <div className="max-w-[1320px] lg:pb-[60px] pb-[30px] mx-auto text-start">
                <h3 className="px-6 lg:text-[40px] text-[25px] text-start font-bold  text-black py-5 ">Why Student Choose Us</h3>
                <p className="text-gray-800 mb-10 lg:px-6 px-3 max-w-[1320px] mx-auto text-lg">
                    We're not just another coaching institute — we're your launchpad to success.
                </p>
                {/* Slider for small screens */}
                <div className="sm:hidden">
                    <Slider {...sliderSettings}>
                        {highlights.map((item, index) => (
                            <div key={index}>
                                <div
                                    style={{ backgroundImage: `url(${item.src})` }}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="relative rounded-3xl border bg-cover bg-center border-red-100 lg:p-8 p-10 text-center transition-all lg:mx-4 overflow-hidden px-5"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/80 via-black/70 to-black/50 z-10"></div>

                                    {/* Text Content - ensure it's above the overlay */}
                                    <div className="relative z-20">
                                        {/* Title */}
                                        <h3 className="text-[25px] font-bold text-white capitalize tracking-wide mb-3">
                                            {item.heading}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white text-[14px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Grid for large screens */}
                <div className="hidden sm:grid grid-cols-3  w-full  mx-auto gap-12 lg:px-6">
                    {highlights.map((item, index) => (
                        <div
                            style={{ backgroundImage: `url(${item.src})` }}
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`w-[100%] h-[500px] bg-white relative bg-no-repeat  bg-cover bg-center bg-opacity-90 rounded-3xl shadow-lg border border-red-100 p-8 text-center transition-all  flex items-end`}
                        >
                            <div className='absolute w-[100%] h-[100%] z-[-10] top-0 left-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-3xl' ></div>
                            <div className='z-40 text-start max-w-lg'>


                                {/* Title */}
                                <h3 className="text-[30px] font-bold text-white capitalize tracking-wide mb-3">
                                    {item.heading}
                                </h3>

                                {/* Description */}
                                <p className="text-white text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
