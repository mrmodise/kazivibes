import React, {Component} from 'react';
import './FullPost.css';
import axios from '../../../axios';

class FullPost extends Component {
    state = {
        loadedPosts: null
    };

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)) {
                return axios.get('/posts/' + this.props.id)
                    .then(response => {
                        console.log(response);
                        this.setState({loadedPosts: response.data});
                    }).catch(error => console.log(error));
            }
        }
    }

    deleteBlogPostData = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log('Deleted ', response);
            }).catch(error => console.log(error));
    };

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (!this.props.id) {
            return post = <p style={{textAlign: 'center'}}>Loading ....</p>;
        }

        if (this.state.loadedPosts) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteBlogPostData}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}


export default FullPost;
