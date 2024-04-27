import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import TopPlace from "../components/TopPlace";
import TouristsSpots from "../components/TouristsSpots/TouristsSpots";
import Navbar from "../components/Navbar/Navbar";
const Home = () => {
const datas = useLoaderData()
  return (
    <div>
    <Banner></Banner>
    <TouristsSpots></TouristsSpots>
    <TopPlace datas={datas}></TopPlace>
    </div>
  );
};

export default Home;