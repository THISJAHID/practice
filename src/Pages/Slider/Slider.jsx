
import Aos from "aos";
import 'aos/dist/aos.css';

const Slider = () => {
    Aos.init({duration:2000})
    return (<>
        <div className="carousel w-full h-[600px]" data-aos="zoom">
  <div id="item1" className="carousel-item w-full">
                <img src="https://i.postimg.cc/Qdz0gJx2/Bougainvillaea.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
                <img src="https://i.postimg.cc/jSJqPM6J/photo-1621801306185-8c0ccf9c8eb8.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
                <img src="https://i.postimg.cc/252t6Dqd/1stbirthday-delhiphotographer-Shambhavi-013.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
                <img src="https://i.postimg.cc/HWKwhkCM/importantanniversary-64de4859bc972.webp" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
                <img src="https://i.postimg.cc/BQb29Gs9/depositphotos-180200248-stock-photo-handsome-man-hugging-his-sensual.webp" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
        </div></>
    );
};

export default Slider;