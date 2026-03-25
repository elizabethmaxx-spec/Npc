const el = document.getElementById('npc-container');
const npcBody = document.getElementById('npc');
let posX = 100, posY = 100;
let speedX = 2, speedY = 0;

function update() {
    posX += speedX;
    posY += speedY;

    // Проверка границ экрана (карабканье)
    if (posX + 60 > window.innerWidth || posX < 0) {
        speedX = 0;
        speedY = (Math.random() > 0.5 ? 2 : -2); // Начинает ползти вверх или вниз
        npcBody.style.transform = 'rotate(90deg)'; // Поворот к стене
    }
    
    if (posY + 60 > window.innerHeight || posY < 0) {
        speedY = 0;
        speedX = (Math.random() > 0.5 ? 2 : -2);
        npcBody.style.transform = 'rotate(0deg)';
    }

    el.style.left = posX + 'px';
    el.style.top = posY + 'px';
    
    requestAnimationFrame(update);
}

update();
