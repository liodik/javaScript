const createMessenger = () => {
  let sender = 'Gromcode';
  let message = 'Just learn it';
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
};
export default createMessenger;

const messenger1 = createMessenger();
const messenger2 = createMessenger();

/messenger1.sendMessage('tom');
