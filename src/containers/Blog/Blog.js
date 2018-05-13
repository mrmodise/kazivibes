import React, {Component} from 'react';
import './Blog.css';
import Post from '../../components/Posts/Post/Post';
import NewPost from '../../components/Posts/NewPost/NewPost';
import FullPost from '../../components/Posts/FullPost/FullPost';
import axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
            this.setState({error: true});
        });
    }

    selectPost = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;

        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post title={post.title}
                             clicked={() => this.selectPost(post.id)}
                             author={post.author}
                             key={post.id}/>;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;
