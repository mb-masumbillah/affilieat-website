import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CourseSlider from "./CourseSlider";
import Review from "./Review";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title> Home | 10 Minute School Promo Codes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <CourseSlider></CourseSlider>
            <Review></Review>
        </div>
    );
};

export default Home;