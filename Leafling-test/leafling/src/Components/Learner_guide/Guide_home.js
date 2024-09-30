import React from 'react';
import { Link } from 'react-router-dom';
import './Guide_home.css'; // Ensure this CSS file contains necessary styles
import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';

// GuideCard component to display individual guide items
const GuideCard = ({ title, image, caption, link }) => (
    <Link to={link} className="guide-card-link">
        <div className="guide-card">
            <img src={image} alt={title} className="guide-image" />
            <div className="guide-content">
                <h3>{title}</h3>
                <p>{caption}</p>
            </div>
        </div>
    </Link>
);

function Guide() {
    const guides = [
        {
            title: 'Proper Watering Techniques',
            image: 'https://plus.unsplash.com/premium_photo-1680322473513-7794fc236ae5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D',
            caption: 'Learn the best practices for watering your plants to keep them healthy and thriving.',
            link: '/watering'
        },
        {
            title: 'Choosing the Right Soil',
            image: 'https://plus.unsplash.com/premium_photo-1664527009212-73e907133b02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U29pbHxlbnwwfHwwfHx8MA%3D%3D',
            caption: 'Discover which types of soil are best for different kinds of plants and how to prepare them.',
            link: '/soil'
        },
        {
            title: 'Caring for Cacti',
            image: 'https://plus.unsplash.com/premium_photo-1670344901637-7fe5e9431ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FjdGl8ZW58MHx8MHx8fDA%3D',
            caption: 'Tips and tricks for keeping your cacti in top shape with minimal effort.',
            link: '/cactus'
        },
        {
            title: 'Using Manure Effectively',
            image: 'https://plus.unsplash.com/premium_photo-1664297279674-e096752abf47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVydGlsaXplcnxlbnwwfHwwfHx8MA%3D%3D',
            caption: 'Understand the benefits of manure and how to use it to enhance your garden’s fertility.',
            link: '/manure'
        },
        {
            title: 'Managing Plant Pests',
            image: 'https://plus.unsplash.com/premium_photo-1661420216583-11e2cfa6f7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGxhbnQlMjBQZXN0c3xlbnwwfHwwfHx8MA%3D%3D',
            caption: 'Identify common plant pests and learn how to manage them to protect your garden.',
            link: '/pests'
        },
        {
            title: 'Seasonal Planting Tips',
            image: 'https://plus.unsplash.com/premium_photo-1661694315539-5c4bf1002ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGxhbnRpbmclMjBUaXBzfGVufDB8fDB8fHww',
            caption: 'Get insights into what plants to grow in each season for a flourishing garden year-round.',
            link: '/seasonal'
        }
    ];

    return (
        <div className='home-1'>
            <div className='topbar-1'>
                <div className="logo">
                    <img src="https://static-00.iconduck.com/assets.00/leaf-icon-1394x2048-ij4dulk2.png" alt="Logo" />
                </div>
                <Link to='/'><strong>Leafling</strong></Link>
                <div className='icons-1'>
                    <div className="icon-item">
                        <img src="https://pngimg.com/d/shopping_cart_PNG4.png" alt="Marketplace" />
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
                        <li><img src={plus} alt="Post" /><Link to="#">Post</Link></li>
                    </ul>
                </div>

                <div className="content-1">
                    <div className="guides-1">
                        {guides.map((guide, index) => (
                            <GuideCard
                                key={index}
                                title={guide.title}
                                image={guide.image}
                                caption={guide.caption}
                                link={guide.link} // Added link prop
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
