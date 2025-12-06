class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    // Función para analizar el mensaje y ejecutar la acción correspondiente
    parse(message) {
      if (message.includes("opción 1")) {
        this.actionProvider.handleOptionSelection("Has seleccionado la opción 1");
      } else if (message.includes("opción 2")) {
        this.actionProvider.handleOptionSelection("Has seleccionado la opción 2");
      } else if (message.includes("opción 3")) {
        this.actionProvider.handleOptionSelection("Has seleccionado la opción 3");
      } else {
        this.actionProvider.handleOptionSelection("Lo siento, no entiendo la opción.");
      }
    }
  }
  
  export default MessageParser;
  