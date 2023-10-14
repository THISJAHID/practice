import { FaFacebook } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { AiFillLinkedin } from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carosul = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='w-2/4 mx-auto '>
      <div className='text-center  m-6'>
        <h3 className='font-bold text-5xl underline'> The Executive Team</h3>
        <p>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
      </div>
      <div>
      
        <Slider {...settings}>
          <div>
            <div className="img w-[100px]  justify-center">

              <img className='rounded-full' src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-1/367467627_1809186426164049_5038744233629490689_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p760x760_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeHovPrmgdilDUoXinHQWEwMFXirJiLUn0IVeKsmItSfQnJowSVjSJQ8iA4qvObY5R1V9DTXvDS74vWvDVzOSJXM&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fbzl4-1.fna&_nc_cat=102&_nc_ohc=u2DCpdoWsDwAX8BbUYR&ccb=1-7&_nc_sid=5fac6f&oh=00_AfDS5zlG251_fDQvDOZcYb-whEYDDbYEBKm7osr3mjvIsA&oe=652BAFC3" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
          <div>
            <div className="img w-[100px]  justify-center">

              <img className='rounded-full' src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-1/373836374_799913771924846_7599841366488063960_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p760x760_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeEsw_EfSwlnSYw41zblBS6wCy4KdETPVa8LLgp0RM9Vr6Z5Du6kdjRD-5ljBdKjjyIXhAHT74Jaiw9X6uWBdeN7&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fbzl4-1.fna&_nc_cat=104&_nc_ohc=sB8VSGORLwEAX_xuamC&ccb=1-7&_nc_sid=5fac6f&oh=00_AfBXtEULnbX2dJjfDxF9O-foNjOO50oOfBJhRScpsrDTaQ&oe=652C2B5C" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
          <div>
            <div className="img w-[100px]  justify-center">

              <img className='rounded-full' src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-6/365312794_105983279262391_1322435293889458912_n.jpg?stp=dst-jpg_e15_q60_s2120x1510_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeGODkM-1ldXUwccN0lQOaz6Yjm9Kwb20jtiOb0rBvbSO0CeaTog41QebewYs_p8kXiOR6_8NDtU1yyyaQSMmmsH&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fbzl4-1.fna&_nc_cat=111&_nc_ohc=TyOvTB6IsFgAX_1mtnI&ccb=1-7&_nc_sid=a2f6c7&oh=00_AfAvvSOb5okfPcK6q_H_pMIzhnJm1cu5yGigCTX7wpxngQ&oe=652ADC95" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
          <div>
            <div className="img w-[100px]  justify-center">

              <img className='rounded-full' src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar1.jpg" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
          <div>
            <div className="img w-[100px]  justify-center">
              <img className='rounded-full' src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar2.jpg" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
          <div>
            <div className="img w-[100px]  justify-center">

              <img className='rounded-full' src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar1.jpg" alt="" />
              <div className="title">
                <h2>Ryan Samuel</h2>
                <span>Co-Founder</span>

              </div>
              <div className='text-2xl flex gap-4'>
                <button className=''><FaFacebook></FaFacebook> </button>
                <button className=''><TiSocialTwitter></TiSocialTwitter> </button>
                <button className=''><AiFillLinkedin></AiFillLinkedin> </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carosul;