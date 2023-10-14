import { Outlet } from "react-router-dom";
import Navebar from "../Navebar/Navebar";
import Footer from "../Footer/Footer";

import Aos from "aos";
import 'aos/dist/aos.css';


const Mainlayout = () => {
    Aos.init({duration:3000})
    return (

        <>
            <div className="container mx-auto" data-Aos= "zoom" >
                <Navebar></Navebar>
                <Outlet></Outlet>
                <Footer></Footer>
           </div>
        </>
    );
};

export default Mainlayout;