import React from 'react';
import { useForm } from "react-hook-form";
import './AddForm.css'

const Form = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const blog = {title:data.title,body:data.body};
    fetch('https://fathomless-lowlands-82472.herokuapp.com/blogs',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(blog)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.insertedId){
        alert('Blog Added Successfully')
      }
    })
  };
    return (
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Title</label>
        <input {...register("title", { required: true })} /> 
      </div>
      <div>
        <label htmlFor="">Body</label>
        <input {...register("body", { required: true })} />
        </div>      
      <input type="submit"/>
    </form>
        </div>
    );
};

export default Form;