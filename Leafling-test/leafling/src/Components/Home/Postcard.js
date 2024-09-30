import React, { useState } from 'react';
import './Postcard.css';

const PostCard = ({ post }) => {
    const { _id, username, image, caption, likes, comments } = post;
    const [postLikes, setPostLikes] = useState(likes.length);
    const [postComments, setPostComments] = useState(comments.length);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        fetch(`/api/posts/${_id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setPostLikes(postLikes + 1);
            } else {
                console.error('Error liking post:', data.error);
            }
        })
        .catch(error => console.error('Error liking post:', error));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/posts/${_id}/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newComment }),
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setPostComments(postComments + 1);
                setNewComment(''); // Clear the input field
            } else {
                console.error('Error adding comment:', data.error);
            }
        })
        .catch(error => console.error('Error adding comment:', error));
    };

    return (
        <div className='post-card'>
            <div className='post-header'>
                <strong>{username}</strong>
            </div>
            <img src={image} alt='Post' className='post-image' />
            <div className='post-actions'>
                <button className='action-button' onClick={handleLike}>
                    <img src='https://cdn-icons-png.flaticon.com/128/1077/1077086.png' alt='Like' />
                </button>
                <button className='action-button'>
                    <img src='https://cdn-icons-png.flaticon.com/128/134/134718.png' alt='Comment' />
                </button>
                <button className='action-button'>
                    <img src='https://cdn-icons-png.flaticon.com/128/10550/10550076.png' alt='Share' />
                </button>
            </div>
            <div className='post-caption'>
                <p>{caption}</p>
            </div>
            <div className='post-stats'>
                <p>{postLikes} Likes</p>
                <p>{postComments} Comments</p>
            </div>
            <div className='comments-section'>
                <form onSubmit={handleCommentSubmit}>
                    <input
                        type='text'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder='Add a comment...'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PostCard;
