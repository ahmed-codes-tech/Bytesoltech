import React from 'react';
import { useChat } from '../../hooks/useChat';
import './ChatWidget.css';

const ChatWidget = () => {
  const {
    chatOpen,
    setChatOpen,
    chatMessages,
    chatInput,
    setChatInput,
    isTyping,
    unreadMessages,
    setUnreadMessages,
    sendMessage,
    quickAction,
  } = useChat();

  const handleQuickAction = (action) => {
    quickAction(action);
  };

  const handleSendMessage = () => {
    sendMessage(chatInput);
  };

  return (
    <div className="chat-widget">
      {chatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-avatar">
              <div className="avatar-icon">💬</div>
              <div className="chat-agent-info">
                <h4>Digital Gravity Assistant</h4>
                <span className="chat-status">Online</span>
              </div>
            </div>
            <button className="chat-close" onClick={() => setChatOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-messages">
            <div className="message agent">
              <div className="message-content">
                Welcome to Digital Gravity! We're here to help. How can I assist you today?
              </div>
              <div className="message-time">Just now</div>
            </div>

            {chatMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-content">{msg.text}</div>
                <div className="message-time">{msg.time}</div>
              </div>
            ))}

            {isTyping && (
              <div className="message agent typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-actions">
            <button className="chat-action-btn" onClick={() => handleQuickAction("question")}>
              💭 I have a question
            </button>
            <button className="chat-action-btn" onClick={() => handleQuickAction("quote")}>
              💰 Get a quote
            </button>
            <button className="chat-action-btn" onClick={() => handleQuickAction("schedule")}>
              📅 Schedule consultation
            </button>
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="chat-send-btn" onClick={handleSendMessage} disabled={!chatInput.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}

      <button className="chat-btn" onClick={() => setChatOpen(prev => !prev)}>
        {chatOpen ? "✕" : "💬"}
        {unreadMessages > 0 && <span className="chat-badge">{unreadMessages}</span>}
      </button>
    </div>
  );
};

export default ChatWidget;