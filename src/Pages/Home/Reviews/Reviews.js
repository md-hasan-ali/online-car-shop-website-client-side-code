// Import Necessary file 
import React, { useEffect, useState } from 'react';
import './Review.css'

// Client Review Component 
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-oasis-56615.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <h2 className='text-center py-4'>What Clients Say ?</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map((review, index) =>
                            <div key={review._id} className="col-md-4">
                                <div className="review-content">
                                    <p>{index}</p>
                                    <h5>Name: {review.name}</h5>
                                    <p>Email: {review.emial}</p>
                                    <p>Rating: {review.rating}</p>
                                    <p>message: {review.message}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;