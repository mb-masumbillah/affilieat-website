import SkillsCard from "../Component/SkillsCard";

const AllSkills = () => {
  const courses = [
    {
      title: "সবাই জন্য Vocabulary",
      instructor: "Munzereen Shahid",
      price: "৳ 1250",
      image: "e1.jpg",
      link: ""
    },
    {
      title: "Complete English Grammar Course",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      image: "e2.jpg",
      link: ""
    },
    {
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      image: "e3.jpg",
      link: ""
    },
    {
      title: "Advanced Writing Skills",
      instructor: "Munzereen Shahid",
      price: "৳ 1750",
      image: "e4.jpg",
      link: ""
    },
    {
      title: "IELTS Preparation Course",
      instructor: "Munzereen Shahid",
      price: "৳ 2000",
      image: "e5.jpg",
      link: ""
    },
  ];
  return (
    <div>
      <SkillsCard courses={courses}></SkillsCard>
    </div>
  );
};

export default AllSkills;
