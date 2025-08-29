'use client'

import Image from "next/image";

export default function About() {


    return (
        <div className='w-full bg-white'>
            <section
                style={{ backgroundImage: 'url("/games.jpg")' }}
                className='w-full h-[70vh] relative  bg-no-repeat bg-cover bg-center '>
                <div className='w-[100%] z-10 h-[100%] absolute top-0 left-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent'></div>
                <div className='relative text-white z-20'>
                    <h3
                        className="px-6 bg-transparent lg:text-[40px] text-[35px] font-bold capitalize text-white pt-12 mb-5">A Platform That Upskills Students
                    </h3>

                    <div className='pt-10 px-6 max-w-[580px]'>
                        <h3 className='text-[32px] text-white/55 mb-2 leading-[45px] font-semibold '>Inframe school of art, design & business</h3>
                        <p className='text-white/45 text-justify text-[18px] tracking-tight leading-[35px]'> Is established by the Inframe Educational Society under Rajasthan shed by the Inframe Educational Society under RajEducational Society under Rajasthan shed by the Inframe  of art, design and business will be one of.</p>
                    </div>

                </div>
            </section>
            <section className='bg-white w-full'>
                <div className='max-w-[1320] grid grid-cols-[40%_auto] gap-5 mx-auto lg:py-[60px] py-[30px] lg:px-6 px-3'>
                    <Image width={800} height={800} className='hover:scale-[1.01] duration-300 w-[100%]' src='/aboutUsPic.JPG' />
                    <div className="bg-gradient-to-l from-black/5 via-white to-white p-5  transition-shadow duration-100 ">
                        <h2 className="capitalize font-bold text-gray-900 text-2xl sm:text-[35px] mb-4 tracking-wide">
                            About Us
                        </h2>
                        <p className="text-gray-900 text-base  sm:text-[19px] leading-relaxed text-justify">
                            Inframes school of art, design & business is established by the Inframe Educational Society under Rajasthan Societies Act 1958. Inframe school of art, design and business will be one of a kind design institute in Jodhpur which will commence it&#39;s curriculum with the aim to expand the design and business field in Jodhpur and it&#39;s surrounding regions by being the first design.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-[#f8f8f8] w-full'>
                <h3
                    className="px-6 text-gray-900 lg:text-[40px] text-[40px] font-bold capitalize py-5 mb-5">Gallery
                </h3>
                <div className='grid grid-cols-[60%_auto] lg:px-6 px-3 gap-[35px]'>
                    <div>
                        <div className='grid grid-cols-2 mb-[35px] gap-[35px]'>
                            <Image width={800} height={800} className='hover:scale-[1.03] duration-300 w-[100%] h-[100%] mb-[35px] rounded-[5px]' src='/gallery1.JPG' />
                            <Image width={800} height={800} className='hover:scale-[1.03] duration-300 mb-[35px] rounded-[5px] w-[100%] h-[100%]' src='/gallery2.JPG' />
                        </div>
                        <div className='grid grid-cols-2 gap-[35px]'>
                            <Image width={800} height={800} className='hover:scale-[1.03] duration-300 rounded-[5px]' src='/gallery3.JPG' />
                            <Image width={800} height={800} className='hover:scale-[1.03] duration-300 rounded-[5px] w-[100%] h-[100%]' src='/gallery4.JPG' />
                        </div>
                    </div>
                    <div>
                        <Image width={800} height={800} className='hover:scale-[1.03] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery8.jpg' />
                    </div>
                </div>
                <div className='grid grid-cols-[40%_35%_auto] h-auto my-[40px] pb-10 lg:px-6 px-3 gap-[35px]'>
                    <Image width={800} height={800} className='hover:scale-[1.03] duration-300 w-[100%] h-[100%] object-cover rounded-[5px] ' src='/gallery6.JPG' />
                    <Image width={800} height={800} className='hover:scale-[1.03] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery7.jpg' />
                    <Image width={800} height={800} className='hover:scale-[1.03] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery5.JPG' />
                </div>
            </section>
        </div>
    )
}