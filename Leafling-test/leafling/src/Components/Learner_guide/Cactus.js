import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cactus.css'; // Ensure this CSS file contains necessary styles

import shopping_cart from '../../images/shopping-cart.png';
import notification from '../../images/notification.png';
import open_book from '../../images/open-book.png';
import chatbot from '../../images/chatbot.png';
import plus from '../../images/plus.png';

const carouselItems = [
    {
        image: 'https://plus.unsplash.com/premium_photo-1681290358247-c160fc097bdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FjdHVzfGVufDB8fDB8fHww',
        title: 'Cactus Care 101',
        text: 'Caring for cacti involves understanding several key factors such as selecting appropriate soil types, mastering potting techniques, and recognizing the different common cactus species available. Proper care encompasses knowing how to water them correctly, how to provide the right amount of light, and how to cater to their specific needs to ensure they remain healthy and vibrant throughout their lifecycle.'
    },
    {
        image: 'https://images.unsplash.com/photo-1520860560195-0f14c411476e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjdHVzfGVufDB8fDB8fHww',
        title: 'Watering Tips',
        text: 'Cacti, unlike many other types of plants, typically require much less frequent watering due to their ability to store water in their tissues. The watering schedule should be adjusted based on various factors such as the current season, the humidity levels in your environment, and the size of your cactus. Overwatering is a common mistake that can lead to root rot, so it is crucial to ensure that the soil has good drainage and that it is allowed to dry out thoroughly between watering sessions to avoid waterlogging.'
    },
    {
        image: 'https://images.unsplash.com/photo-1483365236114-66c215e39238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Light Requirements',
        text: 'Different types of cacti have varied light requirements, with most thriving under bright, indirect light that mimics their natural desert habitat. However, some species of cacti actually prefer and even require direct sunlight to grow optimally. Adjusting the amount of light exposure based on the specific type of cactus you own and the current environmental conditions is essential for promoting healthy growth and ensuring that your cacti receive the right amount of light throughout the day.'
    },
    {
        image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FjdHVzfGVufDB8fDB8fHww',
        title: 'Soil and Potting',
        text: 'For cacti, the ideal soil mix is one that provides excellent drainage and aeration, typically consisting of a blend of sand, perlite, and standard potting soil to prevent water from accumulating and causing root rot. Proper potting practices are critical, including selecting a pot with adequate drainage holes and repotting your cactus when it outgrows its current container. Ensuring that the soil mix supports good airflow around the roots and prevents waterlogging is vital for maintaining the health of your cactus.'
    },
    {
        image: 'https://images.unsplash.com/photo-1517025423291-770fb99ae547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Temperature Needs',
        text: 'Most cacti are adapted to warm temperatures and thrive in environments that mimic their native desert conditions, but they can often tolerate cooler temperatures to some extent. Protecting your cacti from extreme temperature fluctuations is important, as sudden cold spells or excessive heat can stress the plant. Adjusting their environment according to the seasons and ensuring they are kept within a temperature range that suits their specific species helps in maintaining their overall health and vitality.'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1675705062445-0c14a42d4289?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Fertilization Tips',
        text: 'During their active growing season, cacti benefit from being fertilized with a balanced, diluted fertilizer that provides essential nutrients. Applying fertilizer too frequently or in too high a concentration can lead to problems such as salt buildup in the soil, which can damage the cactus roots. To avoid these issues, it’s important to follow recommended guidelines for fertilization and choose fertilizers specifically formulated for cacti or succulents, which cater to their unique nutrient needs.'
    },
    {
        image: 'https://images.unsplash.com/photo-1516481605912-d34c1411504c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Common Pests and Diseases',
        text: 'Cacti can be susceptible to a range of pests including spider mites and mealybugs, which can cause significant damage if not managed properly. Additionally, cacti can suffer from diseases such as fungal infections, which manifest as discolored spots or lesions on the plant. Regularly inspecting your cacti for signs of pests or disease and taking prompt action to treat any issues that arise can help in keeping your plants healthy and preventing the spread of infestations or infections.'
    },
    {
        image: 'https://images.unsplash.com/photo-1516822290226-f5634e1eec35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Propagation Methods',
        text: 'Cacti can be propagated through several methods, including offsets, cuttings, and seeds, each of which has its own set of requirements and success rates. Propagation through offsets involves separating new growths from the parent plant, while cuttings require allowing the cut end to callous before planting. Seed propagation involves planting seeds in a suitable medium and providing the right conditions for germination. Following detailed instructions for each method ensures higher chances of successful propagation and growth of new cacti.'
    },
    {
        image: 'https://images.unsplash.com/photo-1539571711714-62cd2534f96e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Seasonal Care',
        text: 'Adjusting your cactus care routine to accommodate seasonal changes is crucial for their well-being. In the summer months, cacti generally require increased watering and more exposure to light to support their growth. Conversely, in the winter, it’s important to reduce watering significantly and protect your cacti from cold drafts or low temperatures to prevent stress and potential damage. Seasonal care adjustments help maintain the plants health and support its natural growth cycles.'
    },
    {
        image: 'https://images.unsplash.com/photo-1540005597511-eae2f0bd8af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Decorative Uses',
        text: 'Cacti offer a variety of decorative possibilities and can be used creatively to enhance your home decor. From minimalist displays that showcase the natural beauty of individual cacti to vibrant plant collections that add a pop of color, there are many ways to incorporate cacti into your interior design. Arranging cacti in different types of containers or creating unique plant arrangements can complement your home’s aesthetic and provide a distinctive touch to your living spaces.'
    },
    {
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Cactus Varieties',
        text: 'There are numerous cactus species, each with its own distinct characteristics and care requirements. For example, the iconic Saguaro cactus is known for its towering columns and is adapted to extreme heat, while the Easter Cactus features colorful blooms and has different watering needs. Understanding the specific needs of each cactus variety, including their preferred light, temperature, and soil conditions, allows you to provide tailored care and create a thriving cactus collection.'
    },
    {
        image: 'https://images.unsplash.com/photo-1483365236114-66c215e39238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhY3R1c3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Troubleshooting',
        text: 'Common issues with cactus care include problems such as yellowing leaves, which may indicate overwatering, or stunted growth, which can be a sign of insufficient light or nutrients. Identifying and diagnosing these problems involves observing the plant’s symptoms and understanding their potential causes. By applying appropriate solutions and making necessary adjustments to care routines, you can effectively address these issues and help your cactus return to a healthy, thriving state.'
    },
];




function Cactus() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
        );
    };

    const { image, title, text } = carouselItems[currentIndex];

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
                    <div className="carousel-container">
                        <button className="carousel-button prev" onClick={prevSlide}>
                            &lt;
                        </button>
                        <div className="carousel-slide">
                            <div className="carousel-box">
                                <div className="carousel-text">
                                    <h2>{title}</h2>
                                    <p>{text}</p>
                                </div>
                                <img src={image} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
                            </div>
                        </div>
                        <button className="carousel-button next" onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cactus;
