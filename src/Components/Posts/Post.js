import React from 'react';
import 'react-bootstrap';
import '../../Components/Posts/Post.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CommentDetails from '../CommentsDetails/CommentDetails';

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    marginLeft: '100px',
    marginBottom: '20px'
  },
});


const Post = (props) => {
  // console.log(props.comment);
 
  const {id, title, body} = props.post;

  const history = useHistory();
  const handleClick = (postId) => {
    const url = `/PostDetails/${postId}`
    history.push (url);
  }


  const classes = useStyles();
  return (
    <div className="container"> 
    <Card  className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Title of the post : {title}
          </Typography>
          <Typography variant="body3"  color="textSecondary" component="h4">
           The is unique key of the post is: {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Read More : {body} 
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        
        <Button onClick={ () => handleClick(id)} variant="contained" size="medium" color="secondary">
          See More
        </Button>
        
      </CardActions>
    </Card>
    {/* <CommentDetails></CommentDetails> */}
    </div>
  );
};

export default Post;
