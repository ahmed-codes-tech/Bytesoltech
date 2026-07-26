import { useState, useCallback } from 'react';

export const useChat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;

    const userMessage = {
      type: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");

    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "Thanks for your message! How can I help you further?",
        "I understand. Our team will get back to you shortly.",
        "Great question! Let me connect you with an expert.",
        "I've noted your requirement. Would you like to schedule a call?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const agentMessage = {
        type: "agent",
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setChatMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);

      if (!chatOpen) {
        setUnreadMessages(prev => prev + 1);
      }
    }, 1500);
  }, [chatOpen]);

  const quickAction = useCallback((action) => {
    const messages = {
      question: "I have a question about your services",
      quote: "I'd like to get a quote for my project",
      schedule: "I want to schedule a consultation call",
    };
    sendMessage(messages[action]);
  }, [sendMessage]);

  return {
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
  };
};