function createMessenger() {
  let message;
  let sender;
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }
  function setSender(senderName) {
    sender = senderName;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();

messanger1.sendMessage('Ann');
messanger1.setSender('Gromcode');
// const messanger2 = createMessenger();
