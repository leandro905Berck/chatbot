const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

function appendMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');
    userInput.value = '';
    
    setTimeout(() => {
        getBotResponse(message);
    }, 500);
}

function getBotResponse(userMessage) {
    // Aqui você pode adicionar lógica para respostas engraçadas e aprendizado
    let response = '';

    // Respostas engraçadas básicas
    if (userMessage.toLowerCase().includes('oi')) {
        response = 'Oi, tudo bem? Ou melhor, tudo zen? Haha!';
    } else if (userMessage.toLowerCase().includes('como você está')) {
        response = 'Eu estou ótimo, um bot nunca dorme, nunca para!';
    } else {
        response = 'Desculpe, ainda estou aprendendo piadas novas. Pode repetir?';
    }

    appendMessage(response, 'bot');
}
