import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";

const Home = () => {
    return (
        <div  className="">
            <Banner></Banner>
            <ReactTabs></ReactTabs>
            <Offers></Offers>
        </div>
    );
};

export default Home;