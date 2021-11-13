// add necessary file
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './review2.css'

// Reviews Component 
const Reviews = () => {
    const { user } = useAuth();
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://afternoon-oasis-56615.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Submited Successfully...')
                }
                history.push('/home')
            })
    };
    return (
        <div className="review">
            <div className='container py-5'>
                <h2 className='text-center mb-5 text-success'>Review About Our Website</h2>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="review-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user?.displayName} {...register("name")} />
                                <input defaultValue={user?.email} {...register("emial")} />
                                <input placeholder="Rating Number" {...register("rating")} />
                                <textarea placeholder="Message" style={{ height: '150px' }} {...register("message")} />

                                <input className='btn btn-danger' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;