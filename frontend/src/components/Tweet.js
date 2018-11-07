import React, { Component } from 'react'
/* Css */
import './Tweet.css';
/* Image */
import like from '../like.svg';
import api from '../services/api';
export class Tweet extends Component {
    handleLike = async () => {
        const { _id } = this.props.tweet;
        await api.put(`likes/${_id}`);
    }
    render() {
        const { tweet } = this.props;
        return (
            <div>
                <li className="tweet">
                    <strong>{ tweet.author }</strong>
                    <p>{ tweet.content }</p>
                    <button type="button">
                        <img src={like} alt="Like" onClick={this.handleLike}></img>
                        {tweet.likes}
                    </button>
                </li>
            </div>
        );
    }
}

export default Tweet
