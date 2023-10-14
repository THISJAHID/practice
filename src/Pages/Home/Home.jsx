// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import CarouselCustomNavigation from "../Slider/Slider";
import Carosul from "../carosul/Carosul";



const Home = () => {
    // const authinfo = useContext(AuthContext)
   
    return (
        <div>
            <CarouselCustomNavigation></CarouselCustomNavigation>
            <Hero></Hero>
           <Carosul></Carosul>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;