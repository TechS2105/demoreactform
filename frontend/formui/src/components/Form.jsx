import React from 'react';
import FormStyle from '../../public/styles/Form.module.css';
import { useForm } from 'react-hook-form';

function Form() {

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors}

    } = useForm();

    // const delay = (d) => {

    //     return new Promise((resolve, reject) => {

    //         setTimeout(() => {

    //             resolve();

    //         }, d * 1000)

    //     });

    // }

    // const onSubmit = (data) => console.log(data);

    const onSubmit = async (data) => {
        
        // await delay(2);
        let r = await fetch('http://localhost:3000/api/fetchformdata', {

            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(data)

        });
        let res = await r.text();
        console.log(data, res);
        reset();

    }
    
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="firstname"> First Name <sup className={FormStyle.star}> * </sup></label><br />
            <input type="text" placeholder='Enter your first name' {...register("firstname", {required: {value: true, message: "This field is required"}, maxLength: {value: 10, message: "Maxlength is 10"}})} /><br />
            
            {errors.firstname && <div className={FormStyle.errorstyle}> {errors.firstname.message} </div>}
            
            <br />

            <label htmlFor="lastname"> Last Name <sup className={FormStyle.star}> * </sup></label><br />
            <input type="text" placeholder='Enter your last name' {...register("lastname", { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Maxlength is 10" } })} /><br />
            
            {errors.lastname && <div className={FormStyle.errorstyle}> {errors.lastname.message} </div>}

            <br />

            <label htmlFor="email"> Email <sup className={FormStyle.star}> * </sup></label><br />
            <input type="email" placeholder='Enter your email' {...register("email", { required: { value: true, message: "This field is required" }, maxLength: { value: 50, message: "Maxlength if 50" } })} /><br />
            
            {errors.email && <div className={FormStyle.errorstyle}>{errors.email.message}</div>}

            <br />

            <label htmlFor="mobile"> Mobile No. <sup className={FormStyle.star}> * </sup></label><br />
            <input type="tel" placeholder='Enter your mobile no' {...register("mobile", { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Maxlength is 10" } })} maxLength={10} /><br />
            
            {errors.mobile && <div className={FormStyle.errorstyle}>{errors.mobile.message}</div>}
            
            <br />

            <label htmlFor="message"> Message <sup className={FormStyle.star}> * </sup></label><br />
            <textarea cols={68} rows={7} {...register("message", { required: { value: true, message: "This field is required" } })}></textarea><br />
            
            {errors.message && <div className={FormStyle.errorstyle}>{errors.message.message}</div>}<br />
            
            <button type='submit' > Submit </button>

        </form>

    );

}

export default Form;