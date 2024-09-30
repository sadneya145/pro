// src/Components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';
import PostCard from './Postcard';  // Ensure Postcard is updated and properly imported
import Forumcard from './Forumcard';

// Define forum data
const forums = [
    { name: 'Cactus Care', image: 'https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg', description: 'Learn the best practices for taking care of your cacti!', route: '/forum/cactus-care' },
    { name: 'Succulent Enthusiasts', image: 'https://www.bhimtalnursery.com/wp-content/uploads/2022/12/Echeveria-Desmetiana-Succulent-Plant-1.jpg', description: 'Join the community of succulent lovers!', route: '/forum/succulent-enthusiasts' },
    { name: 'Herb Gardeners', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0Jj4oOQd04s-Jrd1HSTzIojBD526bB7JrQ&s', description: 'Grow your own herbs and share your experiences.', route: '/forum/herb-gardeners' },
    { name: 'Flower Power', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg', description: 'All about growing and caring for flowers.', route: '/forum/flower-power' },
    { name: 'Urban Gardening', image: 'https://plantly.io/wp-content/uploads/2023/12/3287b5aa-dbdf-4452-9d72-4b395be4cafa.jpg', description: 'Tips and tricks for gardening in urban areas.', route: '/forum/urban-gardening' },
    { name: 'Vegetable Growers', image: 'https://grangettos.com/cdn/shop/articles/shutterstock_590135870_1600x.jpg?v=1617921748', description: 'Share your journey of growing vegetables.', route: '/forum/vegetable-growers' }
];

function Home() {
    // State to manage posts and modal visibility
    const [posts, setPosts] = useState([]);
    const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
    const [formData, setFormData] = useState({ image: '', text: '' });

    // Fetch posts from the backend
    useEffect(() => {
        fetch('/api/posts')  // Adjusted path to match backend routes
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    // Toggle Create Post modal
    const openCreatePostModal = () => {
        setIsCreatePostVisible(!isCreatePostVisible);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = 'your-user-id'; // Replace with actual user ID
        const { image, text } = formData;

        fetch('/api/posts', {  // Adjusted path to match backend routes
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, image, text })
        })
        .then(response => response.json())
        .then(newPost => {
            setPosts(prevPosts => [newPost, ...prevPosts]); // Add new post to the list
            setFormData({ image: '', text: '' }); // Clear form
            openCreatePostModal(); // Close modal
        })
        .catch(error => console.error('Error creating post:', error));
    };

    return (
        <div className='home-1'>
            <div className='topbar-1'>
                <div className="logo">
                    <img src="https://static-00.iconduck.com/assets.00/leaf-icon-1394x2048-ij4dulk2.png" alt="Logo" />
                </div>
                <Link to='/'><strong>Leafling</strong></Link>
                <div className='icons-1'>
                    <div className="icon-item">
                        <img src={shopping_cart} alt="Marketplace" />
                        <Link to='/marketplace'></Link>
                    </div>
                    <div className="icon-item">
                        <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="Profile" />
                        <Link to='/profile'></Link>
                    </div>
                    <div className="icon-item">
                        <img src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell" alt="Notification" />
                        <Link to='/notifications'></Link>
                    </div>
                </div>
                <div className="search-bar-1">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="mainpage-1">
                <div className="sidebar-1">
                    <ul>
                        <li><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="Profile" /><Link to="/profile">My profile</Link></li>
                        <li><img src={shopping_cart} alt="Marketplace" /><Link to="/marketplace">Marketplace</Link></li>
                        <li><img src={open_book} alt="Guide" /><Link to="/guide">Learner's guide</Link></li>
                        <li><img src={notification} alt="Notifications" /><Link to="/notifications">Notifications</Link></li>
                        <li><img src={chatbot} alt="Chatbot" /><Link to="#">AI chatbot</Link></li>
                        <li><img src={plus} alt="Create Post" /><Link to="#" onClick={openCreatePostModal}>Create Post</Link></li>
                    </ul>
                </div>

                <div className="content-1">
                    <div className="posts-1">
                        {posts.map(post => (
                            <PostCard
                                key={post._id}
                                post={post}
                            />
                        ))}
                    </div>
                    <div className="rightbar-1">
                        <h2>Find your community!</h2>
                        {forums.map((forum, index) => (
                            <Forumcard
                                key={index}
                                name={forum.name}
                                image={forum.image}
                                description={forum.description}
                                route={forum.route}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isCreatePostVisible && (
                <div className="modal-1">
                    <div className="modal-content-1">
                        <h2>Create a New Post</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="text"
                                placeholder="What's on your mind?"
                                value={formData.text}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Submit</button>
                            <button type="button" onClick={openCreatePostModal}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
