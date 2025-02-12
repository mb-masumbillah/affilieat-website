import SkillsCard from "../Component/SkillsCard";
const FreeCourse = () => {
  const courses = [
    {
      title: "Microsoft Office Starter Course",
      instructor: "Sadman Sadiq",
      mainPrice: "free",
      image: "f1.jpg",
      link: "https://10ms.io/qxxhme",
    },
    {
      title: "Study Smart",
      instructor: "Seeam Shahid Noor",
      mainPrice: "free",
      image: "f2.jpg",
      link: "https://10ms.io/Fxxhye",
    },
    {
      title: "বিদেশে উচ্চশিক্ষা: Study Abroad Complete Guideline",
      instructor: "Munzereen Shahid",
      mainPrice: "free",
      image: "f3.jpg",
      link: "https://10ms.io/OxxhdJ",
    },
    {
      title: "কোরআন বোঝার হাতেখড়ি",
      instructor: "Hafiz Mawlana Muhammad Muhsin Mashkur",
      mainPrice: "free",
      image: "f4.jpg",
      link: "https://10ms.io/axxgV8",
    },
    {
      title: "Mobile Photography and Videography",
      instructor: "Sadman Sadiq",
      mainPrice: "free",
      image: "f6.jpg",
      link: "https://10ms.io/9xxgRY",
    },
    {
      title: "সহজ ভাষায় C Programming",
      instructor: "Monjurul Ahsan Nobel, Md Farhan Tanvir",
      mainPrice: "free",
      image: "f8.jpg",
      link: "https://10ms.io/jxxgcE",
    },
    {
      title: "Communication Hacks",
      instructor: "Sadman Sadiq, Ayman Sadiq",
      mainPrice: "free",
      image: "f9.jpg",
      link: "https://10ms.io/DxxghY",
    },
    {
      title: "English Grammar Fundamentals",
      instructor: "Ayman Sadiq",
      mainPrice: "free",
      image: "f10.jpg",
      link: "https://10ms.io/YxxgoA",
    },
    {
      title: "Academic English Grammar",
      instructor: "Fatima Farhana Prova",
      mainPrice: "free",
      image: "f11.jpg",
      link: "https://10ms.io/1xxfMT",
    },
    {
      title: "Money Management",
      instructor: "Sadman Sadik , Ayman Sadiq, Sakib Bin Rashid",
      mainPrice: "free",
      image: "f12.jpg",
      link: "https://10ms.io/2xxfHs",
    },
    {
      title: "English for Everyday",
      instructor: "Munzereen Shahid",
      mainPrice: "free",
      image: "f27.jpg",
      link: "https://10ms.io/7xxgqd",
    },
    {
      title: "Pronunciation Mistakes",
      instructor:
        "Munzereen Shahid, Sakib Bin Rashid, Ayman Sadiq, Mehzabeen Ahmad",
      mainPrice: "free",
      image: "f17.jpg",
      link: "https://10ms.io/DxxfO1",
    },
    {
      title: "Student Hacks",
      instructor: "Sadman Sadik , Ayman Sadiq",
      mainPrice: "free",
      image: "f18.jpg",
      link: "https://10ms.io/axxfg8",
    },
    {
      title: "মোবাইল দিয়ে Graphic Designing",
      instructor: "Sadman Sadiq",
      mainPrice: "free",
      image: "f20.jpg",
      link: "https://10ms.io/qxxhOF",
    },
    {
      title: "Graphic Design এর হাতেখড়ি",
      instructor:
        "Mohammad Shahadat Hossain, SM Anamul Hossain, Asif Hossain, Ahsan Mahbub Yeaman",
      mainPrice: "free",
      image: "f28.jpg",
      link: "https://10ms.io/zxxhIu",
    },
    {
      title: "Math Series",
      instructor: "Ayman Sadiq",
      mainPrice: "free",
      image: "f30.jpg",
      link: "https://10ms.io/lxxfQR",
    },
  ];
  return (
    <div>
      <SkillsCard courses={courses}></SkillsCard>
    </div>
  );
};

export default FreeCourse;
