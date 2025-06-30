const ratingButtons = document.querySelectorAll('.rating-btn');
const responseArea = document.getElementById('.responseArea');
const responseEmoji = document.getElementById('.responseEmoji');
const ResponseMessage = document.getElementById('.ResponseMessage');
const suggestions = document.getElementById('.suggestions');
const playBtn = document.getElementById('.playBtn');
const stopBtn = document.getElementById('.stopBtn');
const musicInfo = document.getElementById('.musicInfo');

let audioContext;
let oscillator;
let gainNode;
let isPLaying = false;

const response = {
    1: {
        emoji: "🤗💕",
        message: " Oh sweetheart, i know it's really tough right now. You're so strong getting throught this. Remember, this pain is temporary and you're absolutely amazing 💪✨",
        suggestions: [
            "Take a warm bath",
            "use a heating pad on your lower back or stomach",
            "Eat some dark chocolate <-- highly recommend",
            "Drink chamomile tea",
            "Listen to your favorite calming music (or just tap the music button)",
            "Take a deep breaths and nap"
        ]
    },
    2: {
        emoji: "😎💌",
        message: "I can see you're having a rough time, but you're handling it like the warrior you are! Take it easy today and be extra kind to yourself. 🌸",
        suggestions: [
            "Stay hydrated with warm drinks",
            "Eat some dark chocolate (again😁)",
            "Watch you favorite comfort movie (with me lol)",
            "Do some light meditation",
            "Ask for a gentle message",
            "Take a short walk if you feel up to it"
        ]
    },
    3: {
        emoji: "🌷💜",
        message: "You're doing better than yesterday! Keep taking care of yourself - you deserve all the comfort and love in the world. 💕",
        suggestions: [
            "Try some herbal tea blends",
            "Do gentle stretching exercises",
            "Write in a journal about your feelings (or just talk with me!)",
            "Listen to uplifting podcasts (listen to my yapping?)",
            "Prepare a nutritious, comforting meal",
            "Practice gratitude for small wins"
        ]
    },
    4:{
        emoji: "🌺💚",
        message: "You're in the middle ground - not great, but manageable! you're so resilient. Let's focus on some gentle self-care today. ✨",
        suggestions: [
            "Go for a gentle walk outside (with me if you want)",
            "Try some light cooking or baking",
            "Call a friend for chat (or you can chat with me)",
            "Do some creative activities",
            "Practice breathing excercises",
            "organize something small ( feels satisfying i guess)"
        ]
    }
}
    playBtn.addEventListener('click', () => {
        bgMusic.play();
        playBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';
        musicInfo.textContent = '🎵 Playing your music';
    });
    
    stopBtn.addEventListener('click', () => {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        playBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        musicInfo.textContent = 'Click to play soothing music';
    });
    // Rating button events
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Get the rating value
            const rating = parseInt(this.dataset.rating);
            
            // Show the response
            showResponse(rating);
        });
    });
    // Show response function
    function showResponse(rating) {
        const response = responses[rating];
        
        // Update the content
        responseEmoji.textContent = response.emoji;
        responseMessage.textContent = response.message;
        
        // Create suggestions list
        suggestions.innerHTML = `
            <h3>💕 Comfort Suggestions:</h3>
            <ul>
                ${response.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
            </ul>
        `;
        
        // Show the response area with animation
        responseArea.classList.add('show');
        
        // Change background color based on rating
        const colors = {
            1: 'linear-gradient(135deg, #ffcccb, #ffe4e1)',
            2: 'linear-gradient(135deg, #ffd1dc, #ffe4e1)',
            3: 'linear-gradient(135deg, #ffb6c1, #ffd1dc)',
            4: 'linear-gradient(135deg, #dda0dd, #e6e6fa)',
            5: 'linear-gradient(135deg, #98fb98, #f0fff0)',
            6: 'linear-gradient(135deg, #87ceeb, #e0f6ff)',
            7: 'linear-gradient(135deg, #ffd700, #fffacd)',
            8: 'linear-gradient(135deg, #ff69b4, #ffb6c1)'
        };
        
        document.body.style.background = colors[rating];
    }
    // Add sparkle effects
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'float 3s ease-out forwards';
        sparkle.style.zIndex = '1';
        
        document.body.appendChild(sparkle);
        
        // Remove after animation
        setTimeout(() => sparkle.remove(), 3000);
    }
    // Create sparkles periodically
    setInterval(createSparkle, 2000);
