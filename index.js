const ratingButtons = document.querySelectorAll('.rating-btn');
const responseArea = document.getElementById('responseArea');
const responseEmoji = document.getElementById('responseEmoji');
const responseMessage = document.getElementById('responseMessage');

const suggestions = document.getElementById('suggestions');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const musicInfo = document.getElementById('musicInfo');

let audioContext;
let oscillator;
let gainNode;
let isPLaying = false;

const responses = {
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
    4: {
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
    },
    5: {
        emoji: "🌟💛",
        message: "You're doing pretty well today! This is a good day to appreciate how strong your body is and treat yourself with kindness. 🌈",
        suggestions: [
            "Take a nice shower with your favorite products",
            "Try a new recipe you've been waiting to make",
            "Spend time on a hobby you love (or spend time with me)",
            "Connect with friends or family ",
            "Do some light execise you enjoy",
            "Plan something fun for tommorow"
        ]
    },
    6: {
        emoji: "✨🧡",
        message: "Look at you feeling good! Your body is amazing and you should celebrate these better days. Keep that positive energy flowing! 💫",
        suggestions: [
            "Engage in your favorite physical activity",
            "Try a new restaurant or cuisine",
            "Spend time outdoors in nature",
            "Work on a passion project",
            "Connext with people that make you happi (obviusly me)",
            "Treat youseflf to something special"
        ]
    },
    7: {
        emoji: "🎉❤️",
        message: "You're feeling great today! I'm so happy to see you thriving. You deserve all these good days and so much more! 🥳",
        suggestions: [
            "Plan a fun activity or outing",
            "Try something new you've been curious about",
            "Execise in a way that makes you feel strong",
            "Spens qulity time with loved ones",
            "Work on goals that excite you",
            "Celebrate your strength and resilience"
        ]
    },
    8: {
        emoji: "🌈💖✨",
        message: "You're absolutely glowing today! I love seeing you feel this amazing. You're incredible, and I hope you know how special you are! 🦋💕",
        suggestions: [
            "Dance to your favorite songs (with me)",
            "Plan an adventure or trip",
            "Try something challenging and fun",
            "Share your positive energy with others (me pls)",
            "Work on big dreams and goals",
            "Document this beautiful day with photos or writing"
        ]
    }
};

playBtn.addEventListener('click', () => {
    bgMusic.play();
    playBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    musicInfo.textContent = '🎵 Playing your music';
});

stopBtn.addEventListener('click', () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    playBtn.style.display =  'inline-block';
    stopBtn.style.display = 'none';
    musicInfo.textContent = 'Click to play soothing music';
});

ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));

        this.classList.add('selected');

        const rating = parseInt(this.dataset.rating);

        showResponse(rating);
    });
});

function showResponse(rating) {
    const response = responses[rating];

    responseEmoji.textContent = response.emoji;
    responseMessage.textContent = response.message;

    suggestions.innerHTML = `
        <h3>💕 Comfort Suggestions:</h3>
        <ul>
            ${response.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
        </ul>
        `;

        responseArea.classList.add('show');


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
};

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

    setTimeout(() => sparkle.remove(), 3000);
};

setInterval(createSparkle, 2000)
