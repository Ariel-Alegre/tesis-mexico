class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleOptionSelection = (description) => {
    const responseMessage = this.createChatBotMessage(description);

    const initialMessage = this.createChatBotMessage(
      "¿En qué más puedo ayudarte?", 
      { widget: "options" }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, responseMessage, initialMessage],
    }));
  };
}

export default ActionProvider;
