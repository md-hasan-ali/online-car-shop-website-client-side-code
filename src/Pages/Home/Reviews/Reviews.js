// Import Necessary file 
import React, { useEffect, useState } from 'react';
import './Review.css'
import Rating from 'react-rating'

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
        <div className='client-review'>
            <h2 className='text-center py-4'>What Clients Say ?</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map((review, index) =>
                            <div key={review._id} className="col-md-4">
                                <div className="review-content">
                                    {/* <p>{index}</p> */}
                                    <h5>Name: {review.name}</h5>
                                    <p>Email: {review.emial}</p>
                                    <Rating
                                        style={{ color: 'gold' }}
                                        initialRating={review.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    />
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