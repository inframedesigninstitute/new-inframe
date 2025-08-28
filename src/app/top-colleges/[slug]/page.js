'use client'
import { useParams } from "next/navigation"

export default function TopColleges() {
    let slug = useParams().slug.replaceAll('-', ' ');
    console.log(slug)

    const collegesData = [
        {
            name: "Malaviya National Institute of Technology (MNIT), Jaipur",
            rank: 15,
            location: "Jaipur, Rajasthan",
            image: "https://plus.unsplash.com/premium_photo-1730658556676-bcf03b6f38e4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "A premier government institute ranked #15 in Architecture by NIRF 2024. Known for strong faculty, excellent infrastructure, and national recognition.",
            applyUrl: "https://mnit.ac.in",
        },
        {
            name: "Manipal University Jaipur (MUJ)",
            rank: 33,
            location: "Jaipur, Rajasthan",
            image: "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "A top private university ranked #33 in NIRF 2024 for Architecture. Offers B.Arch with modern facilities and industry tie-ups.",
            applyUrl: "https://jaipur.manipal.edu",
        },
        {
            name: "Amity University, Jaipur",
            rank: 36,
            location: "Jaipur, Rajasthan",
            image: "https://images.unsplash.com/photo-1605535839586-68f3358463a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Amity offers a NAAC A+ accredited B.Arch program with emphasis on innovation and global exposure.",
            applyUrl: "https://www.amity.edu/jaipur/",
        },
        {
            name: "Poornima University, Jaipur",
            rank: 42,
            location: "Jaipur, Rajasthan",
            image:
                "https://images.unsplash.com/photo-1611369810660-9939de078fd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Poornima's School of Planning and Architecture offers futuristic B.Arch programs with practical labs and studio training.",
            applyUrl: "https://poornima.edu.in",
        },
        {
            name: "Vivekananda Global University (VGU), Jaipur",
            rank: 45,
            location: "Jaipur, Rajasthan",
            image:
                "https://images.unsplash.com/photo-1697120508416-89675565948d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "VGU provides B.Arch programs with real-world exposure, internships, and international collaborations.",
            applyUrl: "https://vgu.ac.in",
        },
    ]
    return (
        <>
            <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center border-b-6 border-white font-bold uppercase text-white py-5 relative z-40" >{slug}</h3>

            {collegesData.map((item, index) => {
                return (
                    <div key={index}>
                        <div style={{ backgroundImage: `url(${item.image})` }} className="w-full h-[70vh] bg-cover bg-center relative bg-fixed">
                            <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.3)]"></div>
                            <div className="bg-white text-black px-5 lg:text-[35px]   text-[22px] font-bold absolute bottom-24 py-[15px] z-40"> {item.name}</div>
                        </div>
                        <div className="max-w-[1320px] my-[40px] mx-auto  lg:px-6 px-3 lg:p-0 p-3">
                            <p className="text-[18px] ">Rank : {index + 1} .  {item.description}</p>
                        </div>

                    </div>
                )
            })}



        </>

    )
}