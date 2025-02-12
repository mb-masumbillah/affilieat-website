import { Link } from "react-router-dom";

const skillsCard = ({courses}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
        {courses.map((course, index) => (
          <Link to={course?.link} key={index} className="border rounded-lg shadow-lg hover:scale-105 duration-700 bg-white">
            <img
              src={course?.image}
              alt={course?.title}
              className="w-full h-40 object-cover rounded-md"
            />
           <div className="p-4">
           <h2 className="mt-2 text-lg font-bold">{course?.title}</h2>
            <p className="text-gray-600">{course?.instructor}</p>
            <p className="mt-2 text-green-600 font-bold"><strong>{course?.mainPrice}</strong> <del className="text-red-600">{course?.price}</del></p>
           </div>
          </Link>
        ))}
      </div>
    );
};

export default skillsCard;