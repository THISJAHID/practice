import { useLoaderData, useParams } from "react-router-dom";
import Post from "./Post";


const PostCart = () => {
    const { category } = useParams()
    const posts = useLoaderData()

    const postData = posts.find(post => post.category === category)




 



  



    return (
        <div className="grid md:grid-cols-2 gap-3 mt-4 mb-4 ">
            {
                postData.posts.map(postes => <Post key={postes.id} postes={postes}></Post>)
            }



<div className="relative text-[#e4dfdf] flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border  shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src="https://i.postimg.cc/W4Ht2mz8/no-Image-Preview.jpg"
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      Up Comming.......
    </h6>
    <h4 className="mb-2 block font-sans text-[#e4dfdf] text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Up Comming events . Stay With us
    </h4>
    <p className="mb-8 text-[#e4dfdf] block font-sans text-base font-normal leading-relaxed  antialiased">
      Like so many organizations these days, 
     
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex text-[#e4dfdf] select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-[#bbbaba] active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>

        </div>
    );
};

export default PostCart;