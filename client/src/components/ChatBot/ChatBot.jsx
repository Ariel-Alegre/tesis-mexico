import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";
import { FaRobot } from "react-icons/fa6";
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón flotante para abrir el chatbot */}
      <div className="buttons-bot-text">
{!isOpen && (

  <div className="chat-text">¿Necesitas ayudar con tu tesis?, TEsMI puede ayudarte</div>
)}
<div
  className="chat-button"
  role="button"
  tabIndex={0}
  aria-label="Abrir chat"
  onClick={() => setIsOpen(!isOpen)}
  onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
>
  <FaRobot className="chat-icon" />
</div>

      </div>


      {/* El chatbot solo se muestra si isOpen es true */}
      {isOpen && (
        <div className="chat-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
             headerText='TEsMI'
             placeholderText='Escribe tu mensaje aquí' 
            
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
