import { motion } from "framer-motion";
import SecitonTitle from "../Component/SecitonTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Review = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const speed = 2; // চলার স্পিড

  const images = [
    { img: "r1.jpg", link: "/classSeven" },
    { img: "r2.jpg", link: "/classSeven" },
    { img: "r3.jpg", link: "/classSeven" },
    { img: "r4.jpg", link: "/classSeven" },
    { img: "r5.jpg", link: "/classSeven" },
    { img: "r6.jpg", link: "/classSeven" },
    { img: "r7.jpg", link: "/classSeven" },
    { img: "r8.jpg", link: "/classSeven" },
    { img: "r9.jpg", link: "/classSeven" },
    { img: "r10.jpg", link: "/classSeven" },
  ];

  useEffect(() => {
    let animationFrame;

    const move = () => {
      if (!isPaused) {
        setXPosition((prev) => (prev - speed) % (images.length * 320)); // Image width অনুযায়ী adjust
      }
      animationFrame = requestAnimationFrame(move);
    };

    move();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div>
      <SecitonTitle subHeading={"Online Course"} heading={"Customer Review"} />
      <div
        className="overflow-hidden relative w-full bg-gray-100"
        onMouseEnter={() => setIsPaused(true)} // মাউস দিলে থামবে
        onMouseLeave={() => setIsPaused(false)} // মাউস সরালে চলবে
        onTouchStart={() => setIsPaused(true)} // মোবাইলে টাচ করলে থামবে
        onTouchEnd={() => setIsPaused(false)} // টাচ ছেড়ে দিলে চলবে
      >
        <motion.div
          className="flex gap-4"
          style={{
            transform: `translateX(${xPosition}px)`,
            whiteSpace: "nowrap",
          }} // Fix motion
        >
          {images.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="h-[600px] w-[300px] rounded-lg shadow-md flex-shrink-0 overflow-hidden"
            >
              <img
                src={item.img}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
