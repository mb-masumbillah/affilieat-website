import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
          <button
            onClick={onClick}
            className="w-full text-left flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200"
          >
            <span className="text-lg font-semibold">{title}</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOpen && (
            <div className="px-6 py-4 bg-white">
              <ul className="list-disc list-inside space-y-2">
                {content.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
};

export default AccordionItem;