(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/our-blogs/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Blogs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Blogs() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const Categories = [
        "All",
        "Education",
        "Career",
        "Facilities",
        "Alumni",
        "Curriculum",
        "Placements",
        "Faculty",
        "Student Life",
        "Video Editing",
        "BBA Course in Advertising and Marketing",
        "ws2"
    ];
    const categoryData = [
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753263888%2Fcarimagecover%2Fusjs5r4cwdtjmxkhbfui.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753444785%2Fcarimagecover%2Fhekf6lj5fjgnx2d4ffve.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        },
        {
            src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1753443614%2Fcarimagecover%2Fcvipey1iu9hs0kzyrxf4.jpg&w=1920&q=75',
            heading: 'Inspiring Education'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)'
                },
                className: "px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  ",
                children: "Our Blogs"
            }, void 0, false, {
                fileName: "[project]/src/app/our-blogs/page.js",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col p-3 bg-gradient-to-tr from-red-400 via-red-200 to-red-400  mb-5 items-center gap-5 py-[40px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center lg:text-[30px] text-[20px] mb-2 text-gray-700",
                        children: "Discover insights, stories, and the latest updates from Inframe School"
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-blogs/page.js",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white w-full max-w-md rounded-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdSearch"], {
                                    className: "text-[25px] text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/our-blogs/page.js",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-blogs/page.js",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                placeholder: "Search...",
                                className: "block w-full pl-10 text-md pr-4 py-3 rounded-md focus:outline-none focus:ring-[3px] focus:ring-red-300 focus:border-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-blogs/page.js",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/our-blogs/page.js",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-blogs/page.js",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1320] mx-auto lg:px-6 px-3 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[30px] border-b-[3] text-red-700",
                        children: "Categories "
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-blogs/page.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full scrollbar overflow-x-auto my-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex whitespace-nowrap",
                            children: Categories.map((item, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(item),
                                    className: "".concat(item == activeTab ? 'bg-red-800 text-white border-red-800' : 'bg-transparent text-red-600 border-red-600', " mb-4 mx-[3px]  border-2   px-4 py-2 rounded-[5px] cursor-pointer hover:bg-red-800 hover:border-transparent hover:text-white duration-300 "),
                                    children: item
                                }, index, false, {
                                    fileName: "[project]/src/app/our-blogs/page.js",
                                    lineNumber: 64,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-blogs/page.js",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-blogs/page.js",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 my-[40px]",
                        children: categoryData.map((item, index)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-sm h-[400px] rounded-lg overflow-hidden shadow-lg group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
                                        style: {
                                            backgroundImage: "url(".concat(item.src, ")")
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-blogs/page.js",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-blogs/page.js",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 p-4 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold mb-1",
                                                children: "Inspiring Education"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/our-blogs/page.js",
                                                lineNumber: 90,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-md mb-3 line-clamp-2",
                                                children: "Discover how our modern curriculum is reshaping the way students learn in the digital age."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/our-blogs/page.js",
                                                lineNumber: 91,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-white text-red-700 text-sm font-semibold px-6 w-full my-[10px] py-2 rounded hover:bg-red-700 hover:text-white transition cursor-pointer",
                                                children: "Read More"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/our-blogs/page.js",
                                                lineNumber: 94,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/our-blogs/page.js",
                                        lineNumber: 89,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/our-blogs/page.js",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-blogs/page.js",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-blogs/page.js",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/our-blogs/page.js",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(Blogs, "1k6lhePRljloIu0Vz/5Kfpi6iMY=");
_c = Blogs;
var _c;
__turbopack_context__.k.register(_c, "Blogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_our-blogs_page_09027ae2.js.map