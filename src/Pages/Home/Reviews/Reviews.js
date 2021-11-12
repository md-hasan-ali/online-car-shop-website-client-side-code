import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    console.log(reviews)

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