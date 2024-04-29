import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import TopPlace from "../components/TopPlace";
import TouristsSpots from "../components/TouristsSpots/TouristsSpots";
import CustomerReview from "../components/CustomerReview/CustomerReview";

const Home = () => {
const datas = useLoaderData()
console.log(datas);
  return (
    <div>
    <Banner></Banner>
    <TouristsSpots></TouristsSpots>
    <TopPlace datas={datas}></TopPlace>
    <CustomerReview></CustomerReview>
    
    </div>
  );
};

export default Home;