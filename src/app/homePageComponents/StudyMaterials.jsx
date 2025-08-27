import React from 'react'

export default function StudyMaterials() {
    let data = [
        { heading: 'Reference Books', description: 'Our experts have created thorough study materials that break down complicated concepts into easily understandable content', src: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/f205f69d-b8b3-4f03-b28b-6c6bdd9eeb02.webp' },
        { heading: 'NCERT Solutions', description: 'Unlock academic excellence with Physics Wallah’s NCERT Solutions which provides you step-by-step solutions', src: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/12b4fb81-b903-4c2d-9b09-d79395ef66c2.webp' },
        { heading: 'Notes', description: 'Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language', src: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3eb5198e-6f36-4df4-ad97-81716b80bab2.webp' },
    ]
    return (
        <div className='w-full  lg:my-[60px] my-[30px]'>
            <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  mb-10">Study Resources</h3>
            <div className="max-w-[1320px] lg:p-0 p-3  mx-auto ">

                <p className='text-center text-[20px] my-[25px]'>A diverse array of learning materials to enhance your educational journey.</p>
                <div className='grid lg:grid-cols-3 lg:h-[400px] h-auto sm:grid-cols-2 grid-cols-1 gap-10 '>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='w-[100%] hover:border-b-10 border-red-600 lg:h-[100%] cursor-pointer group hover:translate-y-[-10px] overflow-hidden transition-all ease-in-out duration-300 rounded-[25px] lg:my-[50px] hover:bg-red-100 bg-gray-200 p-8'>
                                <h3 className='text-[25px]'>{item.heading}</h3>
                                <p className='my-[15px]'>{item.description}</p>
                                <img className='[330px] group-hover:scale-[1.1] object-contain duration-300' src={item.src} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
