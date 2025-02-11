import { Link } from "react-router-dom";

const Card = ({ title, img , link}) => {
  return (
    <div
      className={`rounded-2xl shadow-lg border p-2 text-center text-white w-80`}
    >
      <div className="flex items-center flex-col space-x-2 mb-3">
        <img src={img} alt="icon" className="w-24 h-20 object-cover" />
        <h2 className="font-bold pt-2">{title}</h2>
      </div>
      <Link to={link} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-lg">
        ক্লাস কর 
      </Link>
    </div>
  );
};

export default Card;
