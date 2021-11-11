// add necessary file
import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'

// Reviews Component 
const Reviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="review">
            <div className='container py-5'>
                <h2 className='text-center mb-5'>Review</h2>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue="Your Name" {...register("name")} />
                            <input defaultValue="Email" {...register("emial")} />
                            <textarea defaultValue="Description" {...register("description")} />

                            <input className='btn btn-danger' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;