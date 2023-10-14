import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import HeroCart from "./HeroCart";

const Hero = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch("./event.json")
            .then(res => res.json())
            .then(data => setCategory(data))
      
    },[])
    Aos.init()
    return (
        <>
        <div className="w-2/4  content-center mx-auto">
             <div className="service text-center text-5xl font-bold underline">
                <h3>Our Services</h3>
             </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 justify-center  p-5 gap-2 " > 
            {
              category.map(categories => <HeroCart key={category.length} categories={categories}></HeroCart>)
            
                
            }
        </div>
        </div>
        </>
    );
};

export default Hero;