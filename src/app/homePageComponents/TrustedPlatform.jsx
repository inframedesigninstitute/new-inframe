'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function TrustedPlatform() {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: '-10px', opacity: 0 },
                    {
                        y: '0px',
                        opacity: 1,
                        duration: 0.5,   // 500 seconds is too long, changed to 0.5 seconds
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
    }, []);

    let data = [
        {
            heading: "15 Million+",
            description: "Happy Students",
            src: "/happyStudents.jpg",
        },
        {
            heading: "24000 +",
            description: "Mock Tests",
            src: "/mockTest.JPG",
        },
        {
            heading: "14000 +",
            description: "Video Lectures",
            src: "/videoLecture.JPG",
        },
        {
            heading: "80000 +",
            description: "Practice Papers",
            src: "/practicePaper.JPG",
        },
    ];

    return (

        <div className="lg:py-[40px] py-[30px] ">
            <h3 className="px-6 lg:text-[40px] text-[25px] capitalize text-start font-bold  text-black pt-5 ">A Platform trusted by student</h3>
            <div className="w-full px-6 p-3">

                <div className="max-w-[1320px] mx-auto ">
                    <div className="mb-[55px]">
                        <p className="text-start mt-4 text-[20px] text-gray-800 font-normal">
                            Inframe is not just a platform it is an opportunity for students to
                            upskill and improve yourself.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center lg:gap-12 gap-5">
                        {data.map((item, index) => {
                            return (
                                <div
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${item.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    className="w-full rounded-[10px] lg:rounded-[5px] flex h-[300px] items-end justify-start p-10 relative overflow-hidden "
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5 rounded-[5px] z-10"></div>

                                    <div className="z-40 ">
                                        <h3 className="text-white font-semibold lg:text-[35px] text-[30px] mb-2">
                                            {item.heading}
                                        </h3>
                                        <p className="text-white text-[20px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
