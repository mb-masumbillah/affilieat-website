import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SecitonTitle from "../Component/SecitonTitle";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CourseSlider = () => {
  const slides = [
    {
      img: "6.jpg",
      title: "৬ষ্ঠ শ্রেণি - অনলাইন ব্যাচ ২০২৫",
      subTitle: "[ ১, ৩, ৬ অথবা ১২  মাসের জন্য কিনুন ]",
      discount: "Discount",
      path: "/classSix",
    },
    {
      img: "7.jpg",
      title: "৭ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
      subTitle: "[ ১, ৩, ৬ অথবা ১২  মাসের জন্য কিনুন ]",
      discount: "Discount",
      path: "/classSeven",
    },
    {
      img: "8.jpg",
      title: "৮ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
      subTitle: "[ ১, ৩, ৬ অথবা ১২  মাসের জন্য কিনুন ]",
      discount: "Discount",
      path: "/classEight",
    },
    {
      img: "9.jpg",
      title: "৯ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
      subTitle: "[ ১, ৩, ৬ অথবা ১২  মাসের জন্য কিনুন ]",
      discount: "Discount",
      path: "/classNine",
    },
    {
      img: "10.jpg",
      title: "১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
      subTitle: "[ ১, ৩, ৬ অথবা ১২  মাসের জন্য কিনুন ]",
      discount: "Discount",
      path: "/classTen",
    },
  ];

  return (
    <div className="relative">
      {/* Section Title */}
      <SecitonTitle
        subHeading={"Online Course"}
        heading={"জনপ্রিয় কোর্সসমূহ"}
      />

      {/* Custom Left & Right Navigation Buttons */}
      <button className="custom-prev absolute left-0 sm:left-2 md:left-4 lg:left-0 hover:-left-1 top-[68%] transform -translate-y-1/2 z-10 bg-black text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-red-600 transition">
        <FaChevronLeft className="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      </button>
      <button className="custom-next absolute right-0 sm:right-2 md:right-4 lg:right-0 hover:-right-1 top-[68%] transform -translate-y-1/2 z-10 bg-black text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-red-600 transition">
        <FaChevronRight className="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      </button>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={3} // Default for desktop
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // 👈 Custom Navigation Apply করা হলো
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper  border-y-2"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="pb-8 pt-6" key={index}>
            <Link
              to={slide?.path}
              className="w-full flex flex-col items-center text-center p-2 cursor-pointer hover:scale-105 duration-500"
            >
              <div className="bg-white rounded-lg shadow-lg text-center flex flex-col h-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg w-full lg:h-56 h-32 object-cover"
                />
                <h2 className="text-red-600 lg:-mt-10 -mt-4 ml-4 relative flex justify-center items-center">
                  <span className="lg:text-2xl font-bold absolute lg:top-16 top-8 text-white">
                    {slide.discount} <br /> চলছে
                  </span>
                  <img src="discount.png" alt="" className="lg:w-48 w-28" />
                </h2>
                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-700 font-bold lg:text-lg lg:px-5 px-2">
                    {slide.title} <br />
                    <span className="border-b-2 border-green-700 text-green-700">
                      {slide.subTitle}
                    </span>
                  </p>
                  <div className="mt-5 mb-5">
                    <Link
                      to={slide.path}
                      className="bg-green-600 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Choose Your Month 😊
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
