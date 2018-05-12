import React, {Component} from 'react';
import './Blog.css';
import Post from '../../components/Posts/Post/Post';
import NewPost from '../../components/Posts/NewPost/NewPost';
import FullPost from '../../components/Posts/FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
