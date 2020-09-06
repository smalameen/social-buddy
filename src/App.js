import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Components/Posts/Post';
import PostDetails from './Components/PostDetails/PostDetails';
import ContactWith from './Components/ContactWithDev/ContactWith';
import NotMatched from './Components/NoMatched/NotMatched';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
      <Switch>
      <Route path="/post/">
            <Post/>
          </Route>
          <Route path="/PostDetails/:postId">
            <PostDetails></PostDetails>
          </Route>
          
          <Route path="/contact">
            <ContactWith/>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatched/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
