'use client'

import Image from "next/image";

export default function About() {


    return (
        <div className='w-full bg-white'>
            <section
                style={{ backgroundImage: 'url("/games.jpg")' }}
                className='w-full h-[70vh] relative  bg-no-repeat bg-fixed bg-cover bg-center '>
                <div className='w-[100%] z-10 h-[100%] absolute top-0 left-0 bg-gradient-to-r from-black/100 via-black/80 to-transparent'></div>
                <div className='relative text-white z-20'>
                    <h3
                        style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }}
                        className="px-6 lg:text-[35px] text-[35px] font-bold uppercase text-white py-5 mb-5">A Platform That Upskills Students
                    </h3>

                    <div className='pt-10 px-6 max-w-[580px]'>
                        <h3 className='text-[35px] text-white/55 mb-2 leading-[45px] tracking-[3px] '>Inframe school of art, design & business</h3>
                        <p className='text-white/45 text-justify text-[18px] tracking-tight leading-[35px]'> Is established by the Inframe Educational Society under Rajasthan shed by the Inframe Educational Society under RajEducational Society under Rajasthan shed by the Inframe  of art, design and business will be one of. <br />
                            Is established by the Inframe Educational Society under Rajasthan Is established by the Inframe Educational Society under RajasthanIs established by the Inframe Educational Society under Rajasthan</p>
                    </div>

                </div>
            </section>
            <section className='bg-white w-full'>
                <div className='max-w-[1320] grid grid-cols-[40%_auto] gap-10 mx-auto lg:py-[60px] py-[30px] lg:px-6 px-3'>
                    <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] rounded-[35px]' src='/aboutUsPic.JPG' />
                    <div className="bg-white border-b-4 border-r-4 shadow-sm shadow-red-200 border-red-600 rounded-3xl p-10  hover:shadow-lg transition-shadow duration-100 ">
                        <h2 className="uppercase font-bold text-red-700 text-2xl sm:text-3xl mb-4 tracking-wide">
                            About Us
                        </h2>
                        <p className="text-gray-700 text-base  sm:text-[19px] leading-relaxed text-justify">
                            Inframes school of art, design & business is established by the Inframe Educational Society under Rajasthan Societies Act 1958. Inframe school of art, design and business will be one of a kind design institute in Jodhpur which will commence it&#39;s curriculum with the aim to expand the design and business field in Jodhpur and it&#39;s surrounding regions by being the first design.
                        </p>

                    </div>
                </div>
            </section>

            <section className='bg-white w-full'>
                <h3
                    style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }}
                    className="px-6 lg:text-[35px] text-[35px] font-bold uppercase text-white py-5  mb-5">Gallery
                </h3>
                <div className='grid grid-cols-[60%_auto] lg:px-6 px-3 gap-[35px] lg:my-[40px] my-[30px]'>
                    <div>
                        <div className='grid grid-cols-2 mb-[35px] gap-[35px]'>
                            <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] h-[100%] mb-[35px] rounded-[5px]' src='/gallery1.JPG' />
                            <Image width={800} height={800} className='hover:scale-[1.05] duration-300 mb-[35px] rounded-[5px] w-[100%] h-[100%]' src='/gallery2.JPG' />
                        </div>
                        <div className='grid grid-cols-2 gap-[35px]'>
                            <Image width={800} height={800} className='hover:scale-[1.05] duration-300 rounded-[5px]' src='/gallery3.JPG' />
                            <Image width={800} height={800} className='hover:scale-[1.05] duration-300 rounded-[5px] w-[100%] h-[100%]' src='/gallery4.JPG' />
                        </div>
                    </div>
                    <div>
                        <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery8.jpg' />
                    </div>
                </div>
                <div className='grid grid-cols-[40%_35%_auto] mb-[100px] h-[300px] lg:px-6 px-3 gap-[35px]'>
                    <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] h-[100%] object-cover rounded-[5px] ' src='/gallery6.JPG' />
                    <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery7.jpg' />
                    <Image width={800} height={800} className='hover:scale-[1.05] duration-300 w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery5.JPG' />
                </div>
            </section>
        </div>
    )
}