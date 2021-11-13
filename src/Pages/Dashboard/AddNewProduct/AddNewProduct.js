import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const AddNewProduct = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        fetch('https://afternoon-oasis-56615.herokuapp.com/addNewProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully..');
                    history.push('/explore')
                }
            })
    }
    return (
        <div>
            <h2 className='text-center py-4 text-success'>Add a New Product</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Product Name' {...register("name")} required />
                            <input type='url' placeholder='Image Url' {...register("img")} required />
                            <input placeholder='Product Price' {...register("price")} required />
                            <textarea placeholder='Product Description' style={{ height: '120px' }} {...register("desc")} required />

                            <input className='btn btn-success' type="submit" value="Add New Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;