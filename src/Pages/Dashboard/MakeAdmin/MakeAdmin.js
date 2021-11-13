import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        fetch('https://afternoon-oasis-56615.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h2 className='py-3 text-center text-success'>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='Email' {...register("email")} required />

                <input className='btn btn-success' style={{ width: '145px', display: 'block', margin: '0 auto' }} type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;