import React, { useState } from 'react';
import data from './data.json'; // Adjust the path to where your data.json is located
import './Chatbot.css'; // Import your CSS file for styling
import chaticon from '../../images/chaticon.png'

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState('');

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Check for exact question matches
    for (const item of Object.values(data.responses)) {
      const { question, answer } = item;
      if (lowerInput.includes(question.toLowerCase())) {
        return answer;
      }
    }

    // Check for keyword matches
    for (const item of Object.values(data.responses)) {
      const { keywords, answer } = item;
      if (keywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))) {
        return answer;
      }
    }

    // Default response
    return data.responses.default.answer;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      setError('Please enter a message.');
      return;
    }
    const answer = generateResponse(input);
    setResponses([...responses, { user: input, bot: answer }]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chatbot-header">
          <div className="user-icon"><img src={chaticon}></img></div>
          <div>Chatbot</div>
        </div>
        <div className="chatbot-response">
          {responses.map((resp, index) => (
            <div key={index} className="chatbot-message">
              <div><strong>You:</strong> {resp.user}</div>
              <div><strong>Bot:</strong> {resp.bot}</div>
            </div>
          ))}
        </div>
        <div className="chatbot-input-group">
          <input
            type="text"
            className="chatbot-input"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button className="chatbot-button" onClick={handleSubmit}>Send</button>
        </div>
        {error && <div className="chatbot-error">{error}</div>}
      </div>
    </div>
  );
};

export default Chatbot;
