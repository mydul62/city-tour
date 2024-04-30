
import Banner from "../components/Banner/Banner";
import TopPlace from "../components/TopPlace";
import TouristsSpots from "../components/TouristsSpots/TouristsSpots";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <TouristsSpots></TouristsSpots>
    <Offer></Offer>
    <TopPlace></TopPlace>
    <CustomerReview></CustomerReview>
    
    </div>
  );
};

export default Home;