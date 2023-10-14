import { useLoaderData, useParams } from "react-router-dom";
import PostData from "./PostData";


const PostDetails = () => {
  
    const postId = useLoaderData()






    return (
        <div>
         {
             postId.map(post => post.posts.map(postValue => <PostData key={postValue.id} postValue={postValue}></PostData> ) )
         }
        </div>
    );
};

export default PostDetails;