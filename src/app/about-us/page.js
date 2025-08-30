'use client'

import Image from "next/image";

export default function About() {

    const whyToJoinData = [
        {
            heading: 'System based organisation', data: [
                'Well organised course catalogue',
                'Systematic course approach for every design entrance',
                'Exquisite course structure to fight the design entrances',
                'Elite administration & planned curriculum execution',

            ]
        },
        {
            heading: 'Best pool of Faculties', data: [
                'Experienced faculties from the field of design.',
                'Core Team : Group of Academicians ( mostly Architects & Designers)',
                'Exquisite course structure to fight the design entrances',
                'Defined roles and responsibilities of faculties',
                'All our faculties are themselves in the field of design and have experience in examination coaching',
                'Faculties-student interactions'

            ]
        },
        {
            heading: 'Study Material', data: [
                'Well-structured study material for various entrances',
                'Availability of material for every design entrance separately',
                'Study material upgraded as per syllabus',
                'Study material available for distance preparation',
                'Performance oriented study material',
            ]
        },
        {
            heading: 'E-Learning', data: [
                'Adoption of E-learning mechanism for entrances',
                'Availability of various e-books, e-journals for references',
                'Hands on all design related software’s',
                'Different mock test papers and series also available for practice sessions',
            ]
        },
        {
            heading: 'Commitments', data: [
                'Dedicated team to yield best results in entrances',
                'To carve out best careers for our students in the field of design',
                'Syllabus completion before entrances, providing ample of time for self-preparation',
                'To enhance individuals learnings by assisting them in all possible ways',
            ]
        },
        {
            heading: 'Infrastructure & Support', data: [
                'Well maintained campus with all facilities',
                'Distinct design studios for preparation',
                'Library & labs for exploring more in design',
                'Canteen for refreshments',
                'Dedicated administration cell for enquiries',
                'Accountable support staff and conducive learning environment'
            ]
        },
        {
            heading: 'Maximum selections', data: [
                'Maximum selections by IDI in the design field across the city',
                'Selections in NID, NIFT, Architectural colleges, CEPT, FDDI and many best colleges',
                '100 selection in year 2018(100% student selection)',
                'Total 800 selections from IDI',
            ]
        },
        {
            heading: 'Performance Assessment', data: [
                'Regular test conducted as per the entrance exams format',
                'Micro & Macro level performance evaluation of every student',
                'Guardians informed via mails & messages about their child’s performance & conduct Parents teachers meetings',
                'Proper guidance how to enhance performance on evaluation',
            ]
        },
        {
            heading: 'Counselling, Seminars & Educational Tours', data: [
                'Career counselling seminars held to choose various career in the field of design',
                'Design seminars to know the current market trends and demand',
                'Educational tours for more exposure',
            ]
        },
        {
            heading: 'Scholarships', data: [
                'Various scholarships on the basis of 10th or 12th class results',
                'Free coaching for the aspirants who are economically challenged',
                'Various internships programs in parallel to studies',
            ]
        },
        {
            heading: 'More courses', data: [
                'Short term certificated courses',
                'Long term certificated courses',
                'Summer courses for painting, sketching and many more',
                'Group courses for a group eager to learn and develop skills',
            ]
        },
        {
            heading: 'Preparatory Programmes for Various Examinations', data: [
                'Joint Entrance Examination JEE(Paper II)',
                'National Aptitude test for Architecture Examination',
                'National Institute of Design Examination',
                'National institute of fashion technology Examination',
                'FDII, UCEED, PEARL, IICD, VGU and many more',
            ]
        },
        {
            heading: 'Teaching Methodology', data: [
                'Fundamental learnings of art and design',
                'Well researched study material covering all syllabus of the examination',
                'Periodic test in the curriculum for proper assessment',
                'Personalised doubt solving sessions',
                'Effective classroom teaching for better performance',
            ]
        },
        {
            heading: 'Mission & Vision', data: [
                'Mentoring the young aspirants to make their imagination come true',
                'Providing assistance in all the conceivable ways to embark remarkable impressions across the nation',
                'To cater a conducive environment for integrated progression',
                'To crop socially responsible professional for our nation'
            ]
        }

    ]

    return (
        <div className='w-full bg-white'>

            {/* banner */}
            <section
                style={{ backgroundImage: 'url("/games.jpg")' }}
                className='w-full lg:h-[55vh] h-[90vh] relative  bg-no-repeat bg-cover bg-center '>
                <div className='w-[100%] z-10 h-[100%] absolute top-0 left-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent'></div>
                <div className='relative text-white z-20'>
                    <h3
                        className="px-6 bg-transparent lg:text-[40px] text-[35px] font-bold capitalize text-white lg:pt-12 pt-6 mb-5">A Platform That Upskills Students
                    </h3>

                    <div className='lg:pt-10 pt-5 px-6 max-w-[580px]'>
                        <h3 className='text-[32px] text-white/55 mb-2 leading-[45px] font-semibold '>Inframe school of art, design & business</h3>
                        <p className='text-white/45 text-justify text-[18px] tracking-tight leading-[35px]'> Is established by the Inframe Educational Society under Rajasthan shed by the Inframe Educational Society under RajEducational Society under Rajasthan shed by the Inframe  of art, design and business will be one of.</p>
                    </div>
                </div>
            </section>

            {/* about us  */}
            <section className='bg-white w-full'>
                <div className='max-w-[1320px] mx-auto lg:pt-[40px] pt-[30px] lg:px-6 px-3'>
                    <div className="bg-gradient-to-l from-black/5 via-white to-white transition-shadow duration-100 ">
                        <h2 className="capitalize font-bold text-gray-900 text-2xl sm:text-[35px] mb-4 tracking-wide">
                            About Us
                        </h2>
                        <p className="text-gray-900 lg:pr-7 pr-3 pb-[25px] text-base  sm:text-[19px] leading-relaxed text-justify">
                            Inframes School of Art, Design & Business is established by the Inframe Educational Society under the Rajasthan Societies Act of 1958. As a visionary institution, Inframes is set to become a one-of-a-kind design institute in Jodhpur, committed to nurturing creative talent and entrepreneurial thinking. The school aims to revolutionize design and business education in the region by offering industry-relevant programs, cutting-edge resources, and a multidisciplinary curriculum tailored to meet the evolving demands of the creative economy. <br />
                            With its curriculum poised to launch soon, Inframes seeks to bridge the gap between traditional academics and real-world design practice. The institute will not only serve the aspiring designers and entrepreneurs of Jodhpur but also extend its impact across surrounding regions, fostering a new generation of professionals equipped with both creative and strategic skills. Through hands-on learning, expert mentorship, and a community-driven approach, Inframes is positioned to become a hub for innovation, collaboration, and excellence in the fields of art, design, and business.
                        </p>
                    </div>
                </div>
            </section>

            {/* why to join idi */}
            <section className="w-full lg:py-[40px] py-[30px] ">
                <div className="max-w-[1320px] mx-auto lg:px-6 px-3">
                    <h3
                        className="text-gray-900 lg:text-[35px] text-[30px] font-bold capitalize mb-4">Why to join IDI ?
                    </h3>
                    <div className="border-2 border-gray-100 rounded">
                        <Image alt="" width={800} height={800} className="w-[100%] rounded-t h-auto object-cover" src='/aboutusBanner3.jpg' />
                        <p className="text-[19px] px-3 py-6 bg-gradient-to-r from-[#f8f8f8] via-white to-white ">Inframe Design Institute, the pylon into the field of design and art is all about the opportunities which we can cater to the aspirants for a bright and sound career. We here focus, to groom the brains so that they can brush away the problems which usually the beginners face by providing the exposure of the field, nurturing them into the future professionals and thus building sound career.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-5 mt-10">
                        {whyToJoinData.map((item, index) => {
                            const { data } = item
                            return (
                                <div style={{ backgroundImage: 'url("/gallery2.JPG")' }} key={index} className="my-[5px] w-[100%] h-[350px] bg-cover rounded-[10px]  shadow-lg  flex items-end">
                                    <span className="text-[22px] rounded-b-[10px] w-[100%] bg-white px-5 py-5  font-semibold ">{item.heading}</span>
                                    {/* {data.map((points, ind) => {
                                        return (
                                            <li key={ind} className="text-[20px] my-2">- {points} </li>
                                        )
                                    })} */}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>

            {/* why should we design */}
            <section className="w-full lg:py-[40px] py-[30px] ">
                <div className="max-w-[1320px] mx-auto lg:px-6 px-3">
                    <h3
                        className="text-gray-900 lg:text-[35px] text-[30px] font-bold capitalize mb-4">Why should we design
                    </h3>

                    <div className="border-2 border-gray-100 rounded">
                        <Image className="w-[100%]  mt-[20px] object-cover h-auto" alt="" width={800} height={800} src='/aboutusBanner2.png' />
                        <div className="bg-gradient-to-r lg:p-10 p-5 from-black/5 via-white to-white">
                            <p className="text-[23px] font-semibold mt-[10px] flex items-start gap-1"> <Image alt="" width={800} height={800} className="w-3 h-3 object-contain" src="/quotation-mark.png" />Thinking about design is hard but not thinking about it can be dangerous <Image alt="" width={800} height={800} className="w-3 h-3 object-contain" src="/quotation-mark2.png" /></p>
                            <p className="text-[18px] mt-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Design have been an essential part of the society since decades and designers are believed to be the true intellectuals of the future. IDI (In-frame Design Institute), the design alchemy, endowed and wielded by a group of artist themselves founded back in 2013 is the only exceptional gateway into the sphere of design in the heart of SUNCITY.</p>
                            <p className="text-[18px] mt-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IDI is about an enduring jaunt that we started couple years back in the coliseum of art & design with an agenda of having an ace institution in our city in the field of design and creating aliveness among the young aspirants about careers in design. We initiated with finite resources and brains and now we are immeasurable & extensive in the design meadow.</p>
                            <p className="text-[18px] mt-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We here integrate mentors from the field of art & design to counsel the students in the field of design and enroot a sight of artist in them. We are much more focused on the qualitative study, our commitments in the field of design and the aspects of design which can enhance the level of intelligence in our students and we are in pursuit of attainments.</p>
                            <p className="text-[18px] mt-3"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  We here at IDI offer coaching for numerous design field competitive examinations, some of them are NIFT, NID, UCEED, NATA, JEE (B Arch.), CEPT, PEARL, FDDI, IICD, VGU and also we offer some short duration design courses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* vision and mission */}
            <section className="w-full bg-white lg:mb-[60px] my-[30px]">
                <div className="max-w-[1320px] mx-auto lg:py-[30px] lg:px-6 px-3">
                    <h3
                        className="text-gray-900 lg:text-[35px] text-[30px] font-bold capitalize pb-5 mb-5">Vision & mission
                    </h3>
                    <div>
                        <Image alt="gallery-image" width={800} height={800} src="/aboutusBanner.png" className="mb-10 w-[100%] h-auto object-cover object-center" />
                        <div className="grid sm:grid-cols-3 gap-10">

                            <div className="bg-white border-r-2 border-gray-100 pr-4">
                                <span className="capitalize text-[30px] font-semibold border-gray-900 text-gray-900">Our Foundation</span>
                                <p className="text-[18px] mt-1 text-justify">
                                    InFrame Design Institute (IDI), established in 2013, is a premier design education center located in Jodhpur, Rajasthan. Founded by a group of artists, IDI offers comprehensive coaching for various design entrance examinations, including NIFT, NID, and UCEED.
                                </p>
                            </div>

                            <div className="bg-white border-r-2 border-gray-100 pr-4">
                                <span className="capitalize text-[30px] font-semibold border-gray-900 text-gray-900">Our mission</span>
                                <p className="text-[18px] mt-1 text-justify">
                                    To carve out best for our students and thus establishing an ideal institute in the genre of Art & Design across the nation where we are focused to cater a conducive environment for integrated progression and to crop socially responsible professional for our nation.
                                </p>
                            </div>

                            <div className="bg-white border-r-2 border-gray-100 pr-4">
                                <span className="capitalize text-[30px] font-semibold border-gray-900 text-gray-900">Our vision</span>
                                <p className="text-[18px] mt-1 text-justify">
                                    To be the ace and impeccable arch for the pathfinders, helping the young aspirants to make their imagination come true by providing them assistance in all the conceivable ways to embark remarkable impressions across the nation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section className='bg-gradient-to-b from-[#f8f8f8] via-white to-white w-full'>
                <div className="max-w-[1320px] mx-auto lg:px-6 px-3">
                    <h3
                        className="text-gray-900 lg:text-[35px] text-[30px] font-bold capitalize py-5">Gallery
                    </h3>
                    <div className='grid md:grid-cols-[75%_auto] gap-[15px]'>
                        <div>
                            <div className='grid lg:grid-cols-4 grid-cols-2 mb-[15px] gap-[15px]'>
                                <Image alt="gallery-image" width={800} height={800} className='duration-300 object-cover w-[100%] h-[100%] brightness-90 hover:brightness-100 mb-[15px] rounded-[5px]' src='/gallery1.JPG' />
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover mb-[15px] rounded-[5px] w-[100%] h-[100%]' src='/gallery2.JPG' />
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover mb-[15px] rounded-[5px] w-[100%] h-[100%]' src='/gallery2.JPG' />
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[100%] mb-[15px] rounded-[5px]' src='/gallery1.JPG' />
                            </div>
                            <div className='grid grid-cols-3 gap-[15px]'>
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover rounded-[5px]' src='/gallery3.JPG' />
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover rounded-[5px] w-[100%] h-[100%]' src='/gallery4.JPG' />
                                <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover rounded-[5px] w-[100%] h-[100%]' src='/gallery4.JPG' />
                            </div>
                        </div>
                        <div className="">
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300  w-[100%] h-[100%] object-cover rounded-[5px]' src='/gallery8.jpg' />
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-[65%_auto] grid-cols-1 h-auto my-[15px] pb-10 gap-[15px]'>
                        <div className="grid lg:grid-cols-4 grid-cols-2  gap-[15px] w-[100%]">
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[200px]  rounded-[5px] ' src='/gallery6.JPG' />
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[200px]  rounded-[5px] ' src='/gallery6.JPG' />
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[200px]  rounded-[5px] ' src='/gallery6.JPG' />
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[200px]  rounded-[5px] ' src='/gallery6.JPG' />
                        </div>

                        <div className=" gap-[15px] w-[100%]">
                            <Image alt="gallery-image" width={800} height={800} className='brightness-90 hover:brightness-100  duration-300 object-cover w-[100%] h-[200px] rounded-[5px]' src='/gallery7.jpg' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}