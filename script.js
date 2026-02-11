/* ========================================
   GLOBAL VARIABLES
   ======================================== */

let moves = 0;
let flippedCards = [];
let matchedPairs = 0;
const totalPairs = 6;
const symbols = ['♥', '♥', '♣', '♣', '♦', '♦', '♠', '♠', '♪', '♪', '★', '★'];
let canFlip = true;

/* ========================================
   INITIALIZATION
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    setInterval(createFloatingHearts, 3000);
});

/* ========================================
   FLOATING HEARTS ANIMATION
   ======================================== */

function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (5 + Math.random() * 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }, i * 500);
    }
}

/* ========================================
   PAGE NAVIGATION
   ======================================== */

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function startGame() {
    showPage('gamePage');
    initializeGame();
}

function skipGame() {
    showReasons();
}

function showReasons() {
    showPage('reasonsPage');
}

function showLetter() {
    showPage('letterPage');
    createConfetti();
}

function startOver() {
    // Reset game
    moves = 0;
    matchedPairs = 0;
    flippedCards = [];
    canFlip = true;
    
    // Reset UI
    document.getElementById('moveCount').textContent = '0';
    document.getElementById('gameMessage').textContent = '';
    document.getElementById('continueFromGame').classList.add('hidden');
    
    // Reset reasons
    const reasonItems = document.querySelectorAll('.reason-item');
    reasonItems.forEach(item => {
        item.classList.remove('expanded');
    });
    
    showPage('welcomePage');
}

/* ========================================
   MEMORY GAME LOGIC
   ======================================== */

function initializeGame() {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = '';
    
    // Shuffle symbols
    const shuffled = shuffleArray([...symbols]);
    
    // Create cards
    shuffled.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.textContent = '?';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Memory card');
        
        card.addEventListener('click', () => flipCard(card));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                flipCard(card);
            }
        });
        
        gameGrid.appendChild(card);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard(card) {
    if (!canFlip) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (flippedCards.length >= 2) return;
    
    // Flip the card
    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    flippedCards.push(card);
    
    // Create sparkle effect
    createSparkle(card);
    
    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moveCount').textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.symbol === card2.dataset.symbol) {
        // Match found!
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            
            flippedCards = [];
            canFlip = true;
            
            if (matchedPairs === totalPairs) {
                gameComplete();
            }
        }, 500);
    } else {
        // No match
        setTimeout(() => {
            card1.classList.add('wrong');
            card2.classList.add('wrong');
        }, 500);
        
        setTimeout(() => {
            card1.classList.remove('flipped', 'wrong');
            card2.classList.remove('flipped', 'wrong');
            card1.textContent = '?';
            card2.textContent = '?';
            
            flippedCards = [];
            canFlip = true;
        }, 1500);
    }
}

function gameComplete() {
    const messageEl = document.getElementById('gameMessage');
    messageEl.textContent = 'Yay! You found all the pairs';
    
    const continueBtn = document.getElementById('continueFromGame');
    continueBtn.classList.remove('hidden');
    
    createConfetti();
}

/* ========================================
   REASONS INTERACTION
   ======================================== */

function toggleReason(element) {
    element.classList.toggle('expanded');
    
    // Create sparkle effect
    createSparkle(element);
    
    // Check if all reasons are expanded
    checkAllReasonsExpanded();
}

function checkAllReasonsExpanded() {
    const reasonItems = document.querySelectorAll('.reason-item');
    const expandedItems = document.querySelectorAll('.reason-item.expanded');
    
    // Optional: Auto-show letter button after viewing all reasons
    // Uncomment if you want this behavior
    // if (expandedItems.length === reasonItems.length) {
    //     const letterBtn = document.getElementById('letterBtn');
    //     letterBtn.style.animation = 'pulse 1s ease-in-out 3';
    // }
}

/* ========================================
   VISUAL EFFECTS
   ======================================== */

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#a43867', '#d4698f', '#ffd1ff', '#c4d0fa', '#fad0c4'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

function createSparkle(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 5;
    
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 50) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2 + (Math.random() - 0.5) * 50) + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 50);
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Smooth scroll to top when changing pages
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to page changes
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    scrollToTop();
};

// Prevent double-tap zoom on mobile for buttons
document.addEventListener('touchend', function(e) {
    if (e.target.classList.contains('btn') || 
        e.target.classList.contains('memory-card') || 
        e.target.classList.contains('reason-item')) {
        e.preventDefault();
    }
}, { passive: false });

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Optional: Add escape key functionality
    }
});

/* ========================================
   CONSOLE MESSAGE (Easter Egg)
   ======================================== */

console.log('%c💕 Happy Valentine\'s Day! 💕', 'font-size: 20px; color: #a43867; font-weight: bold;');
console.log('%cMade with love for someone special', 'font-size: 14px; color: #d4698f;');
