import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Post from '../components/Post'; 
import './Posts.css';

const Posts = ({match}) => {
    return (
        <div>
           <h2>Post List</h2> 
           <ul>
                <li><NavLink to={`${match.url}/1`}>Post #1</NavLink></li>
                <li><NavLink to={`${match.url}/2`}>Post #2</NavLink></li>
                <li><NavLink to={`${match.url}/3`}>Post #3</NavLink></li>
                <li><NavLink to={`${match.url}/4`}>Post #4</NavLink></li>
           </ul>
           <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;