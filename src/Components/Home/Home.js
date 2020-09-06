import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';



const Home = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    });


    
    return (
        <div className="container">
            <h1  style = {{marginLeft:'300px'}}>Here is the post from Users</h1>
            {
                posts.map(post => <Post post = {post}></Post>)
            }

            
        </div>
    );
};

export default Home;