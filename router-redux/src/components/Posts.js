import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import Prado from '../Landcruiser Prado.jpg';


class Posts extends Component {

    render() {

        // console.log(this.props);

        const posts = this.props.posts;

        const postsList = this.props.posts.length ? (
            posts.map(post => {
                return (
                    <div key={ post.id } className="post card">
                        <img src={ Prado } alt="Landdcruiser Prado" />

                        <Link to={ `/${post.id}` }>
                            <span className="card-title">{ post.id }: { post.title }</span>
                        </Link>

                        <p className="card-content">
                            { post.body }
                        </p>
                    </div>
                )
            })
        ) : (
            <p className="center">There are currently no posts.</p>
        );

        return (
            <div className="posts">
                { postsList }
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        posts: state.posts,
    }

};


export default connect(mapStateToProps)(Posts);
