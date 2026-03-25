const npc = document.getElementById('npc-container');
const speech = document.getElementById('speech');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Функции для перетаскивания (работают и мышкой, и пальцем)
npc.addEventListener("pointerdown", dragStart);
document.addEventListener("pointermove", drag);
document.addEventListener("pointerup", dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === npc || npc.contains(e.target)) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, npc);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function dragEnd() {
    isDragging = false;
}

// Случайные фразы (можно добавить про маму, хомяка или Nothing Phone!)
const phrases = [
    "Как дела, Семён?",
    "Пойдем кодить?",
    "Ничего себе!",
    "Я слежу за тобой 👀",
    "Проект 'Road to Summer' идет по плану?"
];

setInterval(() => {
    if (!isDragging) {
        speech.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        speech.style.opacity = 1;
        setTimeout(() => speech.style.opacity = 0, 3000);
    }
}, 8000);
