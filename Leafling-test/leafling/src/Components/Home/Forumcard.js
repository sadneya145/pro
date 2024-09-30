import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Forumcard.css'; 

const Forumcard = ({ name, image, description, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <div className='forum-card' onClick={handleClick}>
            <img src={image} alt={name} className='forum-image' />
            <div className='forum-info'>
                <h3 className='forum-name'>{name}</h3>
                <p className='forum-description'>{description}</p>
            </div>
        </div>
    );
};

export default Forumcard;
