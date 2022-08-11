import React from 'react';
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom';
import './EditForm.css'

const Form = () => {
    const { register, handleSubmit } = useForm();
    let {id} = useParams();

  const onSubmit = (data) => {
    const blog = {title:data.title,body:data.body};
    fetch(`https://fathomless-lowlands-82472.herokuapp.com/blog/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(blog)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.modifiedCount){
        alert('Blog updated successfully')
      }
    })
  };
    return (
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Id</label>
        <p style={{marginBottom:'20px'}}>{id}</p>
      </div>
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