import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 900,
      marginLeft: '100px',
      marginBottom: '20px'
    },
  });


const PostDetails = () => {
    // const {name} = props.comment;

    const {postId} = useParams();

    
    // console.log(postId);

    const [post, setPost] = useState([]);

    useEffect(()=>{
        const url1 =`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url1)
        .then(res => res.json())
        .then(data => setPost(data))
    });


    const [comment, setComment] = useState({})
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setComment(data))
  });
    
   

    const classes = useStyles();
    return (
        <div className="container">
    <Card  className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Title of the post : {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           The is unique key of the post is: {post.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Read More : {post.body} 
          </Typography>
          <Typography variant="body3" color="textSecondary" component="h1">
            Comment: {comment.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
</div>
    );
};

export default PostDetails;