import React, { useEffect, useRef, useState } from 'react'
import getPost from '../helpers/getPost';

const Card = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const cardRef = useRef(true);

    useEffect(() => {
        getPost()
            .then(thePost => {
                if(cardRef.current) { 
                    setPost(thePost);
                    setLoading(false);
                }
            });
        return (() => {
            cardRef.current = false;
        });
    }, [])

    return (
        <div>
            <h2 className="my-4">Card</h2>
            { loading ?
                <p className="display-4 text-center">Loading Card...</p>
            :
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="card">
                                <h4 className="card-title m-3">{post.title}</h4>
                                <hr />
                                <p className="card-body m-2">{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    )
}

export default Card