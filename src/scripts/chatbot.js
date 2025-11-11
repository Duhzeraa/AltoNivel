// --- Lógica do Chatbot ---
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

if (chatbotToggle) { // Checa se os elementos existem antes de rodar
    // Função para abrir/fechar o chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
    });

    // Função para adicionar mensagens
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Rolagem automática
    }

    // Respostas automáticas baseadas em palavras-chave
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        if (lowerMessage.includes('olá') || lowerMessage.includes('ola') || lowerMessage.includes('oi') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde') || lowerMessage.includes('boa noite') || lowerMessage.includes('oii') || lowerMessage.includes('ooi') || lowerMessage.includes('Ola') || lowerMessage.includes('Oi')) {
            return 'Olá! Como posso ajudar você hoje? Pergunte sobre nossos serviços: consultoria, gestão financeira, marketing ou tecnologia.';
        } else if (lowerMessage.includes('consultoria')) {
            return 'Nossa consultoria empresarial ajuda a otimizar processos e maximizar eficiência. Quer saber mais?';
        } else if (lowerMessage.includes('gestão financeira') || lowerMessage.includes('financeira')) {
            return 'Oferecemos análises profundas e planos financeiros para estabilidade e crescimento. Como podemos ajudar?';
        } else if (lowerMessage.includes('marketing')) {
            return 'Nosso marketing estratégico cria campanhas inovadoras para elevar sua visibilidade. Interessado?';
        } else if (lowerMessage.includes('tecnologia') || lowerMessage.includes('tecnológicas')) {
            return 'Implementamos soluções tecnológicas de ponta para automatização. Vamos conversar!';
        } else if (lowerMessage.includes('contato') || lowerMessage.includes('fale')) {
            return 'Use o formulário de contato no site ou ligue para (11) 99999-9999.';
        } else if (lowerMessage.includes('horas') || lowerMessage.includes('atendimento')) {
            return 'Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.';
        } else if (lowerMessage.includes('preço') || lowerMessage.includes('custo')) {
            return 'Nossos preços variam conforme o serviço. Entre em contato para um orçamento personalizado.';
        } else {
            return 'Desculpe, não entendi. Pergunte sobre consultoria, gestão financeira, marketing ou tecnologia!';
        }
    }

    // Enviar mensagem
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
            }, 1000); // Simula delay de resposta
        }
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendQuickMessage(keyword) {
        addMessage(keyword, 'user');
        setTimeout(() => {
            const botResponse = getBotResponse(keyword);
            addMessage(botResponse, 'bot');
        }, 800);
    }
}