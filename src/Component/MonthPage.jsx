import { CheckCircle, X } from "lucide-react";
import AccordionItem from "./AccordionItem";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "./Card";

const MonthPage = ({ courses, faqData, clssDes }) => {
  const [showNewContent, setShowNewContent] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [course, setCourse] = useState("");
  const [showGift, setShowGift] = useState(false);
  const phoneNumber = "+8801726374365";
  const [showDemo, setDemoShow] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowNewContent(true);
      } else {
        setShowNewContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const features = [
    {
      title: "Master Book",
      description: [
        "সব বিষয়ের প্রতিটি চ্যাপ্টারের উপর সাজেশন",
        "ক্লাস এবং হোমওয়ার্ক সংক্রান্ত কাঠামো",
        "বহুনির্বাচনী প্রশ্ন এবং প্র্যাকটিস সেট",
        "জাতীয় বিষয়বস্তুর উপর ফোকাস হ্যাকস",
        "পুরো বাংলাদেশে ফ্রি ডেলিভারি",
      ],
    },
    {
      title: "Unlimited Exam Practice",
      description: [
        "প্রতিটি বিষয়ের আনলিমিটেড MCQ প্র্যাকটিস",
        "বিষয়ভিত্তিক নির্দিষ্ট অধ্যায়ের MCQ প্র্যাকটিস",
        "প্র্যাকটিসের ভুল এবং সঠিক উত্তর দেখা",
        "ফুল এক্সামের মতো টাইম আনার পরীক্ষা",
        "প্র্যাকটিস করা প্রশ্ন নিয়ে বার বার প্র্যাকটিস",
      ],
    },
  ];

  // course buy
  const plans = [
    {
      id: 1,
      title: "১ মাসের Promo Code",
      duration: "মেয়াদঃ ৩০ দিন • ভর্তি শেষ ০১ ডিসেম্বর",
      price: "২,৫০০৳",
      image:
        "https://cdn.10minuteschool.com/images/Class_7_Gift_1_1733408213791.png?w=296&h=130",
      link: clssDes.link1,
    },
    {
      id: 2,
      title: "৬ মাসের Promo Code",
      duration: "মেয়াদঃ ১৮০ দিন • ভর্তি শেষ ০১ জুলাই",
      price: "১৫,০০০৳",
      discountPrice: "১২,০০০৳",
      savings: "বাঁচবে ৩,০০০৳",
      perks: ["Master Book Part 1", "Master Book Part 2", "T-Shirt"],
      image:
        "https://cdn.10minuteschool.com/images/Class_7_Gift_2_1733408233650.png?w=296&h=130",
      link: clssDes?.link6,
    },
    {
      id: 3,
      title: "পুরো বছরের Promo Code",
      duration: "মেয়াদঃ ২৪ Nov - ৩১ Dec • ভর্তি শেষ ৩০ নভেম্বর",
      price: "২৭,৫০০৳",
      discountPrice: "১৪,০০০৳",
      savings: "বাঁচবে ১৩,৫০০৳",
      perks: [
        "Master Book Part 1",
        "Master Book Part 2",
        "Master Book Part 3",
        "T-Shirt",
      ],
      image:
        "https://cdn.10minuteschool.com/images/Class_7_Gift_3_1733408263562.png?w=296&h=130",
      link: clssDes.link12,
    },
  ];

  const cards = [
    {
      title: "HSC 26 ব্যাচের ফ্রি লাইভ ক্লাস",
      img: "hsc.jpg",
      link: "https://10ms.io/exlBaR"
    },
    {
      title: "৬ষ্ঠ-৯ম শ্রেণির ফ্রি লাইভ ক্লাস",
      img: "6-9.jpg",
      link: "https://10ms.io/jxlBge"
    },
  ];

  const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];

  const routines = {
    "Class 6": [
      ["শনিবার", "Weekly Exam (CQ + MCQ)", "-"],
      ["রবিবার", "", "Science"],
      ["সোমবার", "Math", "English/Science"],
      ["মঙ্গলবার", "Bangla/BGS", ""],
      ["বুধবার", "", "Bangla/BGS"],
      ["বৃহস্পতিবার", "Math/ICT", "English"],
      ["শুক্রবার", "", "সাপ্তাহিক ছুটি"],
    ],
    "Class 7": [
      ["শনিবার", "Weekly Exam (CQ + MCQ)", "-"],
      ["রবিবার", "Math", "English/ICT"],
      ["সোমবার", "", "Science"],
      ["মঙ্গলবার", "", "Bangla/BGS"],
      ["বুধবার", "Bangla/BGS", "Math"],
      ["বৃহস্পতিবার", "", "English"],
      ["শুক্রবার", "", "সাপ্তাহিক ছুটি"],
    ],
    "Class 8": [
      ["শনিবার", "Weekly Exam (CQ + MCQ)", "-"],
      ["রবিবার", "Math/Science", "English"],
      ["সোমবার", "Math", ""],
      ["মঙ্গলবার", "Bangla/BGS", ""],
      ["বুধবার", "ICT", "Bangla/BGS"],
      ["বৃহস্পতিবার", "Science", "Bangla/BGS/ English"],
      ["শুক্রবার", "", "সাপ্তাহিক ছুটি"],
    ],
    "Class 9": [
      ["শনিবার", "Weekly Exam (CQ + MCQ)", "-"],
      ["রবিবার", "Biology", "G.Math/H.Math"],
      ["সোমবার", "Chemistry", "English/Biology"],
      ["মঙ্গলবার", "Physics/Chemistry", "G.Math/H.Math"],
      ["বুধবার", "Physics", "Bangla/BGS"],
      ["বৃহস্পতিবার", "English", "G.Math/H.Math"],
      ["শুক্রবার", "", "সাপ্তাহিক ছুটি"],
    ],
    "Class 10": [
      ["শনিবার", "Weekly Exam (CQ + MCQ)", "-"],
      ["রবিবার", "G.Math", "Chemistry/Biology"],
      ["সোমবার", "English", "H.Math"],
      ["মঙ্গলবার", "Chemistry", "G.Math/H.Math"],
      ["বুধবার", "Biology", "Physics"],
      ["বৃহস্পতিবার", "G.Math/H.Math", "English/Physicsh"],
      ["শুক্রবার", "", "সাপ্তাহিক ছুটি"],
    ],
  };
  const [activeClass, setActiveClass] = useState(classes[0]);
  return (
    <div>
      <div className="h-[700px]">
        <div className="bg-gradient-to-br from-[#020205] to-[#082953] w-full text-white px-6 pb-10 pt-5 shadow-lg">
          <div className="max-w-screen-xl mx-auto">
            <Marquee className="text-xl ">
              <div className="flex gap-3">
                <span> ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণির</span>
                <span className="text-green-400">
                  ১ মাস, ৩ মাস, ৬ মাস অথবা ১২ মাসের Course এর জন্য{" "}
                  {'"Get Discount"'} অপশন এ ক্লিক করুন
                </span>
              </div>
            </Marquee>
            <div className="lg:w-[45rem]">
              <h2 className="text-2xl font-bold pt-5">{clssDes.className}</h2>
              <p className="mt-2 pt-3 text-gray-400">
                গত চার বছর ধরে প্রায় দেড় হাজার স্কুল শিক্ষার্থীদের সাফল্যের
                ধারাবাহিকতায় টেন মিনিট স্কুল নতুন বছরে নিয়ে এসেছে{" "}
                {clssDes.className} ! অনলাইন ব্যাচ ২০২৫-এ ক্লাসের পড়া শেষ হবে
                ক্লাসেই এবং নিয়মিত এক্সাম ও মেন্টরশিপের মাধ্যমে স্টুডেন্টদের
                প্রস্তুতি হবে ১০০ তে ১০০ ! সর্বোপরি ক্লাস{" "}
                {clssDes.className.split("")[1]}{clssDes.className.split("")[2]}-এর শিক্ষার্থীদের সারা বছরের
                প্রস্তুতিতে সাহায্য করে তাদের লক্ষ্য পূরণ করবে তাদের বিশ্বস্ত
                পার্টনার অনলাইন ব্যাচ!
              </p>
            </div>
          </div>
        </div>
        <div className="w-auto lg:hidden block bg-white shadow-lg rounded-lg p-2 border border-gray-200 mx-auto max-w-md">
          {/* Video Thumbnail */}
          <div className="relative w-full h-auto">
            <img src={clssDes.img} alt="" className="h-full w-full" />
          </div>

          {/* Price */}
          {/* <div className="mt-4">
            <p className="text-green-500 bg-black rounded-md px-2 py-1 font-bold">
              ১ মাস, ৩ মাস, ৬ মাস অথবা ১২ মাসের Course জন্য {'"কোর্সটি কিনুন"'}
              অপশন এ ক্লিক করুন
            </p>
          </div> */}

          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-2">
            <Link
              onClick={() => setDemoShow(true)}
              className={`${
                showDemo ? "hidden" : "block"
              } w-full bg-green-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-green-700`}
            >
               ফ্রি ডেমো ক্লাস বুকিং করুন 😊
            </Link>
            <Link
              onClick={() => setDemoShow(false)}
              className={`${
                showDemo ? "block" : "hidden"
              } w-full bg-red-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-red-700`}
            >
              Remove Demo Class
            </Link>
            <div
              className={`${
                showDemo ? "block" : "hidden"
              } flex gap-6 justify-center items-center  bg-gray-900 p-6`}
            >
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
            {/* <button
                  onClick={() => setShowPromoCode(true)}
                  className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700"
                >
                  কোর্সটি কিনুন 😊
                </button> */}
          </div>

          {/* Course Features */}
          <div className="pt-4">
            <h3 className="text-lg text-black font-semibold">
              এই কোর্সে যা থাকবে
            </h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              {[
                "নিয়মিত লাইভ ক্লাস",
                "ক্লাসের পড়া ক্লাসেই শেষ",
                "ক্লাসেই সরাসরি প্রশ্ন এবং উত্তর",
                "প্র্যাকটিস বুক ও সল্যুশন",
                "নিয়মিত হোমওয়ার্ক",
                "মাসিক রিপোর্ট কার্ড ও লাইভ প্রোগ্রেস ট্র্যাকার",
                "নিয়মিত প্যারেন্ট-টিচার মিটিং",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center py-3">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black gap-2 hover:text-green-500 text-white px-4 py-1 rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                alt=""
                className="w-8"
              />
              <span> whatsApp করুন: 01726374365</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:max-w-screen-xl max-w-md relative mx-auto h-[2000px]">
          <div className="absolute right-10 -top-52 w-[24.4rem] z-30 bg-white shadow-lg rounded-lg p-2 border border-gray-200 mx-auto">
            {/* Video Thumbnail */}
            <div className="relative w-full h-[12.7rem]">
              <iframe
                className="w-full h-full rounded-md"
               src="https://www.youtube.com/embed/grQFoGGQk5U?si=Bc6eJFok17lubM4u"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            {/* Price */}
            {/* <div className="mt-4">
              <p className="text-green-500 bg-black rounded-md px-2 py-1 font-bold">
                {" "}
                ১ মাস, ৩ মাস, ৬ মাস অথবা ১২ মাসের Course জন্য{" "}
                {'"কোর্সটি কিনুন"'} অপশন এ ক্লিক করুন
              </p>
            </div> */}

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                onClick={() => setDemoShow(true)}
                className={`${
                  showDemo ? "hidden" : "block"
                } w-full bg-green-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-green-700`}
              >
                ফ্রি ডেমো ক্লাস বুকিং করুন 😊
              </Link>
              <Link
                onClick={() => setDemoShow(false)}
                className={`${
                  showDemo ? "block" : "hidden"
                } w-full bg-red-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-red-700`}
              >
                Remove Demo Class
              </Link>
              <div
                className={`${
                  showDemo ? "block" : "hidden"
                } flex gap-6 justify-center items-center  bg-gray-900 p-6`}
              >
                {cards.map((card, index) => (
                  <Card key={index} {...card} />
                ))}
              </div>
              {/* <button
                  onClick={() => setShowPromoCode(true)}
                  className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700"
                >
                  কোর্সটি কিনুন 😊
                </button> */}
            </div>

            {/* Course Features */}
            <div className="pt-4">
              <h3 className="text-lg text-black font-semibold">
                এই কোর্সে যা থাকবে
              </h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                {[
                  "নিয়মিত লাইভ ক্লাস",
                  "ক্লাসের পড়া ক্লাসেই শেষ",
                  "ক্লাসেই সরাসরি প্রশ্ন এবং উত্তর",
                  "প্র্যাকটিস বুক ও সল্যুশন",
                  "নিয়মিত হোমওয়ার্ক",
                  "মাসিক রিপোর্ট কার্ড ও লাইভ প্রোগ্রেস ট্র্যাকার",
                  "নিয়মিত প্যারেন্ট-টিচার মিটিং",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center py-3">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black gap-2 hover:text-green-500 text-white px-4 py-1 rounded-md flex items-center"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                  alt=""
                  className="w-8"
                />
                <span> whatsApp করুন: 01726374365</span>
              </a>
            </div>
          </div>
          {showNewContent && (
            <div className="fixed right-[2rem] z-10 top-20 w-[24.4rem] bg-white shadow-lg rounded-lg p-2 border border-gray-200 mx-auto">
              {/* Video Thumbnail */}
              <div className="relative w-full h-[12.7rem]">
                <img src={clssDes.img} alt="" className="h-full w-full" />
              </div>

              {/* Price */}
              {/* <div className="mt-4">
                <p className="text-green-500 bg-black rounded-md px-2 py-1 font-bold">
                  {" "}
                  ১ মাস, ৩ মাস, ৬ মাস অথবা ১২ মাসের Course জন্য{" "}
                  {'"কোর্সটি কিনুন"'} অপশন এ ক্লিক করুন
                </p>
              </div> */}

              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  onClick={() => setDemoShow(true)}
                  className={`${
                    showDemo ? "hidden" : "block"
                  } w-full bg-green-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-green-700`}
                >
                   ফ্রি ডেমো ক্লাস বুকিং করুন 😊
                </Link>
                <Link
                  onClick={() => setDemoShow(false)}
                  className={`${
                    showDemo ? "block" : "hidden"
                  } w-full bg-red-600 text-white py-2 text-center rounded-md  font-semibold hover:bg-red-700`}
                >
                  Remove Demo Class
                </Link>
                <div
                  className={`${
                    showDemo ? "block" : "hidden"
                  } flex gap-6 justify-center items-center  bg-gray-900 p-6`}
                >
                  {cards.map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>
                {/* <button
                  onClick={() => setShowPromoCode(true)}
                  className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700"
                >
                  কোর্সটি কিনুন 😊
                </button> */}
              </div>

              {/* Course Features */}
              <div className="pt-4">
                <h3 className="text-lg text-black font-semibold">
                  এই কোর্সে যা থাকবে
                </h3>
                <ul className="mt-2 space-y-2 text-gray-700">
                  {[
                    "নিয়মিত লাইভ ক্লাস",
                    "ক্লাসের পড়া ক্লাসেই শেষ",
                    "ক্লাসেই সরাসরি প্রশ্ন এবং উত্তর",
                    "প্র্যাকটিস বুক ও সল্যুশন",
                    "নিয়মিত হোমওয়ার্ক",
                    "মাসিক রিপোর্ট কার্ড ও লাইভ প্রোগ্রেস ট্র্যাকার",
                    "নিয়মিত প্যারেন্ট-টিচার মিটিং",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center py-3">
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black gap-2 hover:text-green-500 text-white px-4 py-1 rounded-md flex items-center"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                    alt=""
                    className="w-8"
                  />
                  <span> whatsApp করুন: 01726374365</span>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className={showPromoCode ? "block" : "hidden"}>
          <div className="fixed inset-0 z-50 h-screen">
            <div className="fixed top-1/2 left-1/2 w-full h-screen bg-[#00000064] transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="flex justify-center items-center lg:w-[1024px] fixed z-50 lg:top-1/2 top-[72%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 lg:p-4">
            <div className="bg-white lg:p-6 p-1 rounded-xl shadow-lg w-full relative">
              <button
                className="absolute lg:top-4 -top-6 lg:right-4 right-0 p-1 rounded-full bg-red-600 hover:bg-red-800"
                onClick={() => {
                  setShowPromoCode(false);
                  setSelectedPlan(null);
                }}
              >
                <X className="lg:w-8 lg:h-8 w-5 h-5 text-white " />
              </button>
              <div className="flex flex-col-reverse sm:flex-row lg:gap-4 sm:gap-28 items-center ">
                <h2 className="lg:text-xl text-base font-semibold mb-2 text-center sm:text-left lg:w-1/2">
                  সুবিধামত Promo Code ব্যবহার করুন
                </h2>
                <div className="lg:w-1/2">
                  <Marquee
                    style={{
                      width: "80%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <h2 className="font-semibold lg:mb-2 text-red-700">
                      আপনার পছন্দের মাসে ক্লিক করে {'"এগিয়ে যান"'} বাটনে ক্লিক
                      করুন
                    </h2>
                  </Marquee>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-center text-xs lg:text-base sm:text-left">
                লাইভ ক্লাস, পরীক্ষা— সব নিয়ে বছরেরব্যাপী পড়াশোনার আয়োজন
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:overflow-y-scroll overflow-y-scroll h-[278px] lg:h-auto border-red-600 border-2 p-4 ">
                {plans.map((plan) => (
                  <div
                    key={plan?.id}
                    className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedPlan === plan?.id
                        ? "border-green-500 bg-green-100"
                        : "border-gray-300"
                    }`}
                    onClick={() => {
                      setSelectedPlan(plan?.id);
                      setCourse(plan?.link);
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">{plan?.title}</h3>
                      {selectedPlan === plan?.id && (
                        <CheckCircle className="text-green-500 w-5 h-5" />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{plan?.duration}</p>
                    <div className="mt-2">
                      <span className="font-bold text-lg">
                        {plan?.discountPrice || plan?.price}
                      </span>
                      {plan?.discountPrice && (
                        <span className="text-red-500 line-through ml-2">
                          {plan?.price}
                        </span>
                      )}
                      <br />
                      {plan?.savings && (
                        <span className="ml-2 bg-green-200 text-green-700 py-1 px-2 rounded-full">
                          {plan?.savings}
                        </span>
                      )}
                    </div>
                    {plan?.perks && (
                      <ul className="mt-2 text-sm text-gray-600">
                        {plan?.perks.map((perk, index) => (
                          <li key={index} className="flex items-center">
                            ✅ {perk}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex justify-end items-center">
                      <button
                        onClick={() => setShowGift(true)}
                        className={`${
                          showGift ? "hidden" : "block"
                        } bg-green-600 text-white px-2 rounded-full text-center my-2"`}
                      >
                        show gift
                      </button>
                      <button
                        onClick={() => setShowGift(false)}
                        className={`${
                          showGift ? "block" : "hidden"
                        } bg-red-600 text-white px-2 rounded-full text-center my-2"`}
                      >
                        x
                      </button>
                    </div>
                    <img
                      src={plan?.image}
                      alt={plan?.title}
                      className={`${
                        showGift ? "block" : "hidden"
                      } "mt-2 w-full h-24 object-contain"`}
                    />
                  </div>
                ))}
              </div>
              <Link to={`${course}`}>
                <button
                  className="w-full mt-4 p-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
                  disabled={selectedPlan === null && !selectedPlan}
                  onClick={() => {
                    selectedPlan;
                  }}
                >
                  এগিয়ে যান
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          showDemo ? "mt-[680px]" : "mt-[380px]"
        } max-w-screen-xl mx-auto relative lg:-mt-[420px]`}
      >
        <figure className="hidden lg:block w-[40rem] h-[25rem] mt-8 ml-[4.5rem]">
          <img src={clssDes.img} alt="" />
        </figure>

        <div className="max-w-md mx-auto lg:mx-0 lg:max-w-[49.2rem] space-y-4">
          {courses.map((course, index) => (
            <Link
              to={course.link}
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col lg:flex-row items-center justify-between"
            >
              <div className="flex flex-col items-center p-4 border-r border-gray-300 w-full md:w-auto">
                <p className="text-red-500 font-bold text-2xl">
                  {course.discount}
                </p>
                <p className="text-gray-700 font-bold">TK Discount</p>
              </div>
              <div className="flex-1 px-6">
                <h2 className="text-xl font-semibold text-green-700">
                  {course.title}
                </h2>
                <p className="text-gray-700 mt-2">
                  {course.duration} - {course.price} টাকার কোর্সে পাচ্ছেন{" "}
                  {course.discount} টাকা ছাড়! মাত্র{" "}
                  <span className="text-green-500 bg-black text-xl px-3 rounded-full font-bold">
                    {course.price - course.discount} ৳
                  </span>{" "}
                  টাকায় ভর্তি হতে ক্লিক করুন <strong>Get Discount</strong> বাটন
                  !
                </p>
              </div>
              <div className="w-full md:w-[11rem]">
                <button className="bg-green-600 w-full font-bold text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                  Get Discount
                </button>
                <p className="mt-2 bg-black text-white px-4 py-2 rounded-lg shadow-md">
                  {course.duration} কোর্স
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <div className="pt-14 max-w-md mx-auto lg:mx-0 lg:max-w-[49.2rem]">
            <h2 className="text-2xl font-bold mb-4">কোর্স এক্সক্লুসিভ ফিচার</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-black group 
                 even:bg-white odd:bg-black
                 even:text-black odd:text-white shadow-lg p-6 rounded-lg flex items-center border"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.description.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">ক্লাস রুটিন</h2>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setActiveClass(cls)}
            className={`px-4 py-2 rounded-lg border ${
              activeClass === cls ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {cls}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-3 px-4 border-r">বার</th>
              <th className="py-3 px-4 border-r">সন্ধ্যা ৬:৩০ টা</th>
              <th className="py-3 px-4">রাত ৮:৩০টা</th>
            </tr>
          </thead>
          <tbody>
            {routines[activeClass]?.map((row, index) => (
              <tr key={index} className="border-b border-gray-300">
                {row.map((cell, idx) => (
                  <td
                    key={idx}
                    className="py-3 px-4 border-r last:border-r-0"
                  >
                    {cell || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
        </div>
        <div>
          <div className="pt-12 max-w-md lg:mx-0 mx-auto lg:max-w-[49.2rem]">
            <h2 className="text-2xl font-bold mb-4">
              কোর্স সম্পর্কে বিস্তারিত
            </h2>
            <div className="shadow-lg rounded-lg overflow-hidden">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndexes.includes(index)}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthPage;
