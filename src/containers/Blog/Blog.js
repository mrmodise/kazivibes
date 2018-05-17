import React, {Component} from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    render() {

        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path={"/"} exact component={Posts}/>
                    <Route path={"/new-post"} component={AsyncNewPost}/>
                    <Route path={"/:id"} exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;
