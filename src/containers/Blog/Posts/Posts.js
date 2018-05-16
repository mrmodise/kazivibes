import React, {Component} from 'react';
import axios from '../../../axios';
import './Posts.css';
import Post from '../../../components/Posts/Post/Post';
import {Link} from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    };

    selectPost = (id) => {
        this.setState({selectedPostId: id});
    };

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 6);

                const updatedPosts = posts.map(post => {
                    return {
                        ...post, author: 'Praise'
                    };
                });

                this.setState({posts: updatedPosts});
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Link to={'/'+ post.id} key={post.id}>
                    <Post title={post.title}
                          clicked={() => this.selectPost(post.id)}
                          author={post.author}/>
                </Link>;
            });
        }

        return (
            <section className={"Posts"}>
                {posts}
            </section>
        );
    }
}

export default Posts;
