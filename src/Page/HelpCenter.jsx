import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const phoneNumber = "+8801726374365";

  return (
    <div className="max-w-3xl mx-auto lg:p-6 p-2 bg-white rounded-2xl shadow-lg mt-20 border">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <div className="">
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" /> promo10ms@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-500" /> +880 1726374365
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" /> Rangpur Divition, Bangladesh
            Country
          </p>
        </div>
        <div className="text-lg flex flex-col items-center lg:max-w-2xl max-w-md mt-3">
          <div className="flex lg:flex-nowrap gap-2 pt-2">
            <Link
              target="_blank"
              to="https://www.facebook.com/share/1AVaDAZxwG/"
              className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-8 w-4"
              />
              <span>Facebook</span>
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=61558601160130"
              className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-8 w-4"
              />
              <span>Page</span>
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=61571193290759"
              className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-10 w-4"
              />
              <span>Page</span>
            </Link>
            <Link
              target="_blank"
              to="https://facebook.com/groups/1553731405509665/"
              className="bg-black p-1 gap-2 hover:text-blue-400 text-xs lg:text-base text-white lg:px-2 lg:py-1 rounded-md flex items-center"
            >
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
                className="lg:w-10 w-4"
              />
              <span>Group</span>
            </Link>
          </div>
          <div className="flex lg:flex-nowrap lg:gap-4 flex-wrap gap-1 p-2 justify-center items-center">
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

            <Link
              target="_blank"
              to="https://www.youtube.com/@user-ty1eg1lf1o"
              className="bg-black p-1 lg:gap-2 hover:text-red-400 text-white px-2 text-xs rounded-md flex items-center"
            >
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
    </div>
  );
};

export default HelpCenter;
