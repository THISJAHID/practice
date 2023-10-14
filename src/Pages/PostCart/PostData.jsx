import React from 'react';
import { useParams } from 'react-router-dom';

const PostData = ({ postValue }) => {
    const { id, title , description ,image } = postValue
    const { num } = useParams()
    console.log(num)

    return (
        <>

            {
                num == id && <>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={image? image: "https://i.postimg.cc/W4Ht2mz8/no-Image-Preview.jpg"} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                </>


            }
        </>
    );
};

export default PostData;