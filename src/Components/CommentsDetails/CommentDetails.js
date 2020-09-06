// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CommentDetails = (props) => {
//     // const {name} = props.comment;
//     const {postId} = useParams();

//     const [comment, setComment] = useState({})
//     useEffect(()=>{
//         const url = `https://jsonplaceholder.typicode.com/comments`
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setComment(data))
//     });
//     return (
//         <div>
//             <h1>This is comments details:{name} </h1>

//         </div>
//     );
// };

// export default CommentDetails;