import { Link } from "react-router-dom";

const Banner = () => {
  const phoneNumber = "+8801726374365";
  return (
    <div className=" w-full h-full flex justify-between items-center lg:pb-10 flex-col-reverse lg:flex-row">
      <div className="absolute inset-0 -z-10 md:block hidden ">
        <div className="absolute top-1/3 left-1/2 lg:w-[1024px] h-[400px] bg-gradient-to-r from-[#e15ce183] via-[#0bff5c46] to-[#e15ce183] rounded-full blur-3xl transform -translate-x-1/2 opacity-35 -translate-y-1/2"></div>
      </div>
      {/* Content */}
      <div className="text-black space-y-2 lg:pl-8 px-1 mt-16">
        <h1 className="lg:text-4xl text-lg font-bold text-black inline-block bg-clip-text">
          10MS Discount – প্রোমো কোড ব্যবহার করুন
        </h1>
        <p className="font-bold lg:pt-5 lg:text-lg text-xs">
          আপনার পছন্দের কোর্সে বিশেষ ছাড় পেতে নিচের নির্দেশনা অনুসরণ করুন : 😊
        </p>
        {/* Steps */}
        <div className="space-y-2 text-left text-xs lg:text-base rounded-lg pt-3">
          <p>
            👉 <strong>{'"ডিসকাউন্ট"'}</strong> অপশনে ক্লিক করুন।
          </p>
          <p>
            👉 <strong>{'"কোর্সটি কিনুন"'}</strong> অপশনে ক্লিক করুন।
          </p>
          <p>👉 লগইন করতে ফোন নম্বর বা ই-মেইল ব্যবহার করুন।</p>
          <p>
            👉 <strong>{'"অর্ডার কনফার্ম"'}</strong> করুন।
          </p>
          <p>👉 পেমেন্ট সম্পন্ন করুন (বিকাশ, রকেট, নগদ, কার্ড ইত্যাদি)।</p>
          <p>
            👉 পেমেন্ট কমপ্লিট হলে <strong>{'"কোর্স শুরু করুন"'}</strong> অপশনে
            ক্লিক করুন।
          </p>
        </div>

        {/* Help Section */}
        <div className="text-lg flex flex-col items-center lg:max-w-xl max-w-md">
          <div className="flex lg:flex-nowrap gap-2 pt-2">
            <Link target="_blank" to="https://www.facebook.com/share/1AVaDAZxwG/" className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-8 w-4"
              />
              <span>Facebook</span>
            </Link>
            <Link target="_blank" to="https://www.facebook.com/profile.php?id=61558601160130" className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-8 w-4"
              />
              <span>Page</span>
            </Link>
            <Link target="_blank" to="https://www.facebook.com/profile.php?id=61571193290759" className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-10 w-4"
              />
              <span>Page</span>
            </Link>
            <Link target="_blank" to="https://facebook.com/groups/1553731405509665/" className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-10 w-4"
              />
              <span>Group</span>
            </Link>
          </div>
          <div className="flex lg:flex-nowrap lg:gap-4 gap-1 p-2 justify-center items-center">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-1 gap-2 hover:text-green-500 text-white lg:px-4 lg:py-1 text-xs lg:text-base rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                alt=""
                className="lg:w-8 w-4"
              />
              <span> whatsApp করুন: 01726374365</span>
            </a>

            <Link target="_blank" to="https://www.youtube.com/@user-ty1eg1lf1o" className="bg-black p-1 lg:gap-2 hover:text-red-400 text-white px-2 text-xs rounded-md flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000"
                alt=""
                className="lg:w-10 w-4"
              />
              <span>Youtube</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative lg:-top-[156px] -top-[0px] pb-10 lg:pb-0 -z-50 lg:pr-8 pr-0">
        <figure>
          <img
            src="addmission.png"
            alt=""
            className="rounded-b-full lg:w-[20rem] w-[10rem]"
          />
        </figure>
        <figure className="absolute lg:top-[175px] lg:-left-[13px] left-[20px]">
          <img
            src="offer.png"
            alt=""
            className="lg:w-96 w-32 origin-top animate-[swingBalanced_2s_ease-in-out_infinite]"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
