import Link from "next/link";
import { useState } from "react";
import { megaMenuData } from "../ApiData/categoryApi";
import MegaMenuContent from "./MegaMenuContent";

export default function MegaMenu({ MegaMenuOpen, setMegaMenuOpen }) {
    const [activeTab, setActiveTab] = useState("onlineCourse");

    const tabMap = {
        onlineCourse: "Online Courses",
        offlineCourse: "Offline courses",
        studyMaterial: "Study Material",
        testSeries: "Test Series",
        freeRes: "Free Resources",
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${MegaMenuOpen
                ? "translate-y-0 block opacity-100 visible"
                : "invisible -translate-y-10 opacity-0 hidden"
                } absolute duration-400 bg-[#f8f8f8] transition-all ease-in-out top-[100%] left-[170px]  shadow-2xl rounded-b-[15px] w-[900px] origin-top h-[auto] z-[100] px-5 py-5 lg:block hidden text-gray-900`}
        >
            <div className="grid grid-cols-[30%_auto] gap-5">
                <div className="border-0">
                    <ul>
                        <li onClick={() => setActiveTab("onlineCourse")} className={`menu-tab w-full duration-300 rounded-[10px] text-[17px] text-start px-3 py-4 hover:bg-white hover:border-gray-200 hover:shadow-md border-[1px] border-transparent`}>Online Course</li>
                        <li onClick={() => setActiveTab("offlineCourse")} className="menu-tab w-full duration-300 rounded-[10px] text-[17px] text-start px-3 py-4 hover:bg-white hover:border-gray-200 hover:shadow-md border-[1px] border-transparent">Offline Course</li>
                        <li onClick={() => setActiveTab("studyMaterial")} className="menu-tab w-full duration-300 rounded-[10px] text-[17px] text-start px-3 py-4 hover:bg-white hover:border-gray-200 hover:shadow-md border-[1px] border-transparent">Study Material</li>
                        <li onClick={() => setActiveTab("testSeries")} className="menu-tab w-full duration-300 rounded-[10px] text-[17px] text-start px-3 py-4 hover:bg-white hover:border-gray-200 hover:shadow-md border-[1px] border-transparent">Test Series</li>
                        <li onClick={() => setActiveTab("freeRes")} className="menu-tab w-full duration-300 rounded-[10px] text-[17px] text-start px-3 py-4 hover:bg-white hover:border-gray-200 hover:shadow-md border-[1px] border-transparent">Free Resources</li>
                    </ul>
                </div>
                <div className="h-[65vh] scrollbar overflow-y-scroll">
                    <MegaMenuContent
                        category={tabMap[activeTab]}
                        setMegaMenuOpen={setMegaMenuOpen}
                    />
                </div>
            </div>
        </div>
    );
}
