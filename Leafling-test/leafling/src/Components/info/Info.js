import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css';

function Info() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and redirection
    navigate('/home');
  };

  return (
    <div className='pageholderpic-3'>
    <div className="container-3">
        <h1><strong>Tell Us More!</strong></h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group-3">
                <label htmlFor="phone">Contact Number</label>
                <input type="text" id="phone" name="phone" placeholder='Enter your contact number 'required />
            </div>
            <div className="form-group">
                <label>Do you want to be a seller?</label>
                <div className="radio-group">
                    <label><input type="radio" name="sell" value="yes" required /> Yes</label>
                    <label><input type="radio" name="sell" value="no" required /> No</label>
                </div>
            </div>
            <div className="form-group-3">
                <label>Experience Level</label>
                <div className="radio-group">
                    <label><input type="radio" name="experience" value="beginner" required /> Beginner</label>
                    <label><input type="radio" name="experience" value="intermediate" required /> Intermediate</label>
                    <label><input type="radio" name="experience" value="pro" required /> Pro</label>
                </div>
            </div>
            <div className="form-group-3">
                <label htmlFor="topics">Plant-Related Topics of Interest (select multiple)</label>
                <div className="interests">
                    <label><input type="checkbox" name="topics" value="indoor" /> Indoor Plants</label>
                    <label><input type="checkbox" name="topics" value="outdoor" /> Outdoor Plants</label>
                    <label><input type="checkbox" name="topics" value="succulents" /> Succulents</label>
                    <label><input type="checkbox" name="topics" value="flowering" /> Flowering Plants</label>
                    <label><input type="checkbox" name="topics" value="herbs" /> Herbs</label>
                    <label><input type="checkbox" name="topics" value="vegetables" /> Vegetables</label>
                    <label><input type="checkbox" name="topics" value="trees" /> Trees</label>
                    <label><input type="checkbox" name="topics" value="care" /> Plant Care Tips</label>
                    <label><input type="checkbox" name="topics" value="pests" /> Pest Control</label>
                </div>
            </div>
            <div className="form-group-3">
              <button className='submit'>Submit</button>
            </div>
        </form>
        <div className="footer-3">
            <strong><p>Already have an account? <a href="/">Log in</a></p></strong>
        </div>
    </div>
    </div>
  );
}

export default Info;
