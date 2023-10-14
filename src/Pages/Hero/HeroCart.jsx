import { Link } from "react-router-dom";


const HeroCart = ({ categories }) => {
    const { category ,icon } = categories;
    
    return (
        <>
            <div className="" data-aos="fade-up">
                <Link to={`/postCart/${category}`}>
                    <div className="card p-5 hover:bg-red-500  hover:text-white bg-[#faf9f9] w-full  text-center" >
                        <div className="icon mx-auto w-[100px]  justify-center">
                       <img src={icon} alt="" />
                        </div>
                        <div className="title font-extrabold">
                            <h2>{category}</h2>
                        </div>
                    </div>
                </Link>
               

            </div>
        </>
    );
};

export default HeroCart;