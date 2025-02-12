import SkillsCard from "../Component/SkillsCard";

const AllSkills = () => {
  const courses = [
    {
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      mainPrice: "৳ 1690",
      image: "e1.jpg",
      link: "https://10minuteschool.com/product/ghore-boshe-spoken-english/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=affgbse1690",
    },
    {
      title: "সবাই জন্য Vocabulary",
      instructor: "Munzereen Shahid",
      price: "৳ 1250",
      mainPrice: "৳ 1050",
      image: "e3.jpg",
      link: "https://10minuteschool.com/product/shobar-jonno-vocabulary/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=vocab1050",
    },
    {
      title: "Complete English Grammar Course",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      mainPrice: "৳ 1690",
      image: "e2.jpg",
      link: "https://10minuteschool.com/product/english-grammar-course/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=englishgrammar",
    },
    {
      title: "Spoken English for Kids",
      instructor: "Munzereen Shahid",
      price: "৳ 2500",
      mainPrice: "৳ 1950",
      image: "e10.jpg",
      link: "https://10minuteschool.com/product/kids-english/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=kids1950",
    },

    {
      title: "Facebook Ads Mastery",
      instructor: "Mark Anupom Mollick",
      price: "৳ 1250",
      mainPrice: "৳ 1125",
      image: "e6.jpg",
      link: "https://10minuteschool.com/product/facebook-ads-mastery-course/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=facebookadmty",
    },
    {
      title: "Facebook Marketing",
      instructor: "Ayman Sadiq",
      price: "৳ 1250",
      mainPrice: "৳ 890",
      image: "e11.jpg",
      link: "https://10minuteschool.com/product/facebook-marketing/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=facebook890",
    },
    {
      title: "WordPress দিয়ে Freelancing",
      instructor: "Asaduzzaman Asad",
      price: "৳ 2500",
      mainPrice: "৳ 1950",
      image: "e7.jpg",
      link: "https://10minuteschool.com/product/wordpress-course/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=wordpressaff",
    },
    {
      title: "YouTube Marketing করে Freelancing",
      instructor: "Md. Sabbir Hossain",
      price: "৳ 2500",
      mainPrice: "৳ 2250",
      image: "e8.jpg",
      link: "https://10minuteschool.com/product/youtube-marketing-course/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=youtubemktaff",
    },
    {
      title: "SEO করে Freelancing",
      instructor: "Md Faruk Khan",
      price: "৳ 2500",
      mainPrice: "৳ 1950",
      image: "e5.jpg",
      link: "https://10minuteschool.com/product/seo-course/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=completeseocourse",
    },
    {
      title: "Programming for kids",
      instructor: "Md Faruk Khan",
      price: "৳ 2500",
      mainPrice: "৳ 2250",
      image: "e9.jpg",
      link: "https://10minuteschool.com/product/programming-kids/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=sk1125",
    },
  ];
  return (
    <div>
      <SkillsCard courses={courses}></SkillsCard>
    </div>
  );
};

export default AllSkills;
