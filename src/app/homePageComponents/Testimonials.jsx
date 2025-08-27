'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

export default function Testimonials() {
    gsap.registerPlugin(ScrollTrigger);
    const cardRef = useRef();
    const sliderRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { y: '-80px', opacity: 0 },
            {
                y: '0px',
                opacity: 1,
                duration: 0.5,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    let data = [
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial0.mp4',
        },
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial1.mp4',
        },
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial2.mp4',
        },
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial2.mp4',
        },
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial2.mp4',
        },
        {
            name: 'STUDENT NAME',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            src: '/testimonial2.mp4',
        },

    ];



    return (
        <div ref={cardRef} className="w-full lg:bg-gray-50 py-10">
            <h3
                style={{
                    background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)'
                }}
                className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5 mb-10"
            >
                Happy Students Testimonials
            </h3>

            <div className="max-w-[1320px] mx-auto px-3">
                <div onClick={() => setAutoPlay(!autoPlay)} className="cursor-pointer">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-white p-4 rounded-[20px] shadow-md h-full">
                                    <video
                                        className="w-full h-[300px] object-cover rounded-[15px] mb-4"
                                        src={item.src}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        onClick={(e) => {
                                            if (autoPlay) {
                                                e.target.play()
                                            }
                                            else {
                                                e.target.pause()
                                            }
                                        }}
                                    />
                                    <p className="flex items-center gap-2 text-[20px] text-amber-400 mb-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                    <h4 className="text-xl font-semibold mb-1 text-red-700">{item.name}</h4>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
