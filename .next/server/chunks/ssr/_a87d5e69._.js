module.exports = {

"[project]/src/app/top-colleges/[slug]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>TopColleges
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
function TopColleges() {
    let slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])().slug.replaceAll('-', ' ');
    console.log(slug);
    const collegesData = [
        {
            name: "Malaviya National Institute of Technology (MNIT), Jaipur",
            rank: 15,
            location: "Jaipur, Rajasthan",
            image: "https://plus.unsplash.com/premium_photo-1730658556676-bcf03b6f38e4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "A premier government institute ranked #15 in Architecture by NIRF 2024. Known for strong faculty, excellent infrastructure, and national recognition.",
            applyUrl: "https://mnit.ac.in"
        },
        {
            name: "Manipal University Jaipur (MUJ)",
            rank: 33,
            location: "Jaipur, Rajasthan",
            image: "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "A top private university ranked #33 in NIRF 2024 for Architecture. Offers B.Arch with modern facilities and industry tie-ups.",
            applyUrl: "https://jaipur.manipal.edu"
        },
        {
            name: "Amity University, Jaipur",
            rank: 36,
            location: "Jaipur, Rajasthan",
            image: "https://images.unsplash.com/photo-1605535839586-68f3358463a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Amity offers a NAAC A+ accredited B.Arch program with emphasis on innovation and global exposure.",
            applyUrl: "https://www.amity.edu/jaipur/"
        },
        {
            name: "Poornima University, Jaipur",
            rank: 42,
            location: "Jaipur, Rajasthan",
            image: "https://images.unsplash.com/photo-1611369810660-9939de078fd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Poornima's School of Planning and Architecture offers futuristic B.Arch programs with practical labs and studio training.",
            applyUrl: "https://poornima.edu.in"
        },
        {
            name: "Vivekananda Global University (VGU), Jaipur",
            rank: 45,
            location: "Jaipur, Rajasthan",
            image: "https://images.unsplash.com/photo-1697120508416-89675565948d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "VGU provides B.Arch programs with real-world exposure, internships, and international collaborations.",
            applyUrl: "https://vgu.ac.in"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)'
                },
                className: "px-6 lg:text-[35px] text-[25px] text-center border-b-6 border-white font-bold uppercase text-white py-5 relative z-40",
                children: slug
            }, void 0, false, {
                fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            collegesData.map((item, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundImage: `url(${item.image})`
                            },
                            className: "w-full h-[70vh] bg-cover bg-center relative bg-fixed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.3)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black px-5 lg:text-[35px]   text-[22px] font-bold absolute bottom-24 py-[15px] z-40",
                                    children: [
                                        " ",
                                        item.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1320px] my-[40px] mx-auto  lg:px-6 px-3 lg:p-0 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[18px] ",
                                children: [
                                    "Rank : ",
                                    index + 1,
                                    " .  ",
                                    item.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/top-colleges/[slug]/page.js",
                    lineNumber: 63,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_a87d5e69._.js.map