import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';


class PostDetail extends Component {

    // state = {
    //     post: null
    // };
    //
    // postUrl = `https://jsonplaceholder.typicode.com/posts/`;
    //
    // async componentDidMount() {
    //     // console.log(this.props);
    //     let id = this.props.match.params['post_id'];
    //     let response = await axios.get(`${this.postUrl}${id}`);
    //     console.log(response);
    //     this.setState({ post: response['data'] });
    // }


    removePost = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');   // redirect to the home page after deleting a post
    };

    render() {

        // console.log(this.props);

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{ this.props.post.title }</h4>
                <p className="">{ this.props.post.body }</p>
                <button onClick={ this.removePost } className="btn grey">DELETE</button>
            </div>
        ) : (
            <div className="center">
                <p>Post not found.</p>
            </div>
        );

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}


const mapStateToProps = (state, componentProps) => {      // componentProps are the props before the store was used

    let id = componentProps.match.params['post_id'];
    return {
        post: state.posts.find(post => post.id == id)
    }
};


const mapDispatchToProps = dispatch => {

    return {
        deletePost: id => dispatch({ type: 'DELETE-POST', id: id })      // the action of type "DELETE_POST" is dispatched to the rootReducer
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);