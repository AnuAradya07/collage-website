const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const messages = [
  {
    sender: 'bot',
    text: "⏰ Don't Miss Your Window of Opportunity"
  },
  {
    sender: 'bot',
    text: "🚨 Apply before these program deadlines close. Time is ticking!"
  }
];

function displayMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(message.sender === 'bot' ? 'bot-message' : 'user-message');
  messageDiv.textContent = message.text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;
  const userMessage = { sender: 'user', text };
  displayMessage(userMessage);
  userInput.value = '';

  // Simulate bot response
  setTimeout(() => {
    const botReply = { sender: 'bot', text: "Thank you for your message! We'll get back to you shortly." };
    displayMessage(botReply);
  }, 1000);
}

// Display initial messages
messages.forEach(displayMessage);

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
