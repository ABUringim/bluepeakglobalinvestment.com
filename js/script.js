// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Chat Widget
const chatBubble = document.getElementById('chatBubble');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatSend = document.getElementById('chatSend');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatBubble.addEventListener('click', () => {
    chatWindow.classList.add('active');
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Chat functionality
const responses = {
    'services': 'We offer 7 core services: Mineral Resources Trading, Oil & Gas Marketing, Import & Export, General Production, ICT & Electronics, General Contract & Trading, and Multi-Sector Operations.',
    'contact': 'You can reach us at bluepeakglobalinvestment@gmail.com or call +234 803 561 9489. Our office is at No. S11 Alhamsad Tower, Zoo Road, Kano.',
    'location': 'Our office is located at No. S11 Alhamsad Tower, Zoo Road, Kano, Nigeria.',
    'email': 'Our email is bluepeakglobalinvestment@gmail.com',
    'phone': 'You can call us at +234 803 561 9489 or +234 810 844 6059',
    'minerals': 'We provide strategic mineral trading and exploration services worldwide. Visit our Mineral Resources page for more details.',
    'energy': 'We offer comprehensive oil, gas, and energy marketing solutions. Check our Energy Marketing page for more information.',
    'import': 'We facilitate global trade and logistics management for import and export operations.',
    'production': 'We provide end-to-end manufacturing and production solutions across various industries.',
    'ict': 'We offer cutting-edge ICT and electronics solutions including data centers and technology infrastructure.',
    'contract': 'We provide professional contracting and trading services for various projects.',
    'logistics': 'Our multi-sector operations include procurement, logistics management, and consultancy services.'
};

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return 'Hello! How can I help you today? You can ask about our services, contact information, or location.';
    }
    
    if (lowerMessage.includes('help')) {
        return 'I can help you with information about our services, contact details, and location. What would you like to know?';
    }
    
    return 'Thank you for your message. For specific inquiries, please contact us at bluepeakglobalinvestment@gmail.com or call +234 803 561 9489.';
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 500);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Duplicate gallery items for seamless loop
const galleryTrack = document.querySelector('.gallery-track');
if (galleryTrack) {
    const items = galleryTrack.innerHTML;
    galleryTrack.innerHTML += items;
}
