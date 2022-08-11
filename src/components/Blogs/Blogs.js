import React, { useEffect, useState } from 'react';
import {Grid} from '@mui/material';
import './Blog.css';
import {Link} from 'react-router-dom'

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [newBlog,setNewBlog] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setBlogs(data.slice(0,10)))
    },[])
    useEffect(()=>{
        fetch('https://fathomless-lowlands-82472.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setNewBlog(data))
    },[])
    return (
        <>
            <Grid container spacing={2}>
                {
                    blogs.map(blog => 
                        <Grid className='blog' key={blog.id} item xs={3}>
                            <p className='blog-title'>{blog.title}</p>
                            <br />
                            <p>{blog.body}</p>
                        </Grid>
                    )
                }
                {
                    newBlog.map(blog => 
                        <Grid className='blog' key={blog._id} item xs={3}>
                            <p className='blog-title'>{blog.title}</p>
                            <br />
                            <p style={{marginBottom:'20px'}}>{blog.body}</p>
                            <Link to={'/blog/'+ blog._id} style={{textDecoration:'none'}} >Edit Post</Link>
                        </Grid>
                    )
                }

            </Grid>
        </>
    );
};

export default Blogs;