"use client";
import { FaIndianRupeeSign } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function TopCourses() {
  return (
    <div className="w-full ">
      <div className="max-w-[1320px] mx-auto">
        <h3 className="px-6 lg:text-[40px] text-[30px] text-start font-bold  text-black lg:pb-5  ">Top Selling Course</h3>
        <OnlineCourses />
        <OfflineCourses />
        <StudyMaterial />
        <TestSeries />
      </div>
    </div>
  );
}

export function OnlineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // Slide change interval: 2 seconds
    pauseOnHover: false,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-normal text-[25px] pt-3 mb-0" >
        Best Selling Online Courses
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[200px] object-cover rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4 h-[320px]">
                  <h2 className="text-[20px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-[14px] text-justify tracking-tighter">
                    {item.description}
                  </p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export function OfflineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Slide change interval: 2 seconds
    pauseOnHover: false,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-normal text-[25px] pt-3 mb-0" >
        Best Selling Offline Course
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[200px] object-cover rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4 h-[320px] ">
                  <h2 className="text-[20px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-[14px] text-justify tracking-tighter">
                    {item.description}
                  </p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export function StudyMaterial() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // Slide change interval: 2 seconds
    pauseOnHover: false,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-normal text-[25px] pt-3 mb-0" >
        Best Selling Study Material
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[200px] object-cover rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4 h-[320px]">
                  <h2 className="text-[20px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-[14px] text-justify tracking-tighter">
                    {item.description}
                  </p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export function TestSeries() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Slide change interval: 2 seconds
    pauseOnHover: false,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-normal text-[25px] pt-3 mb-0" >
        Best Selling Test Series
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[200px] object-cover rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4 h-[320px]">
                  <h2 className="text-[20px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-[14px] text-justify tracking-tighter">
                    {item.description}
                  </p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}