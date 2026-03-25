const el = document.getElementById('npc-container');
let posX = 100, posY = 100;
let speedX = 1.5, speedY = 0; // Медленная скорость ходьбы

function update() {
    // Двигаем персонажа
    posX += speedX;
    posY += speedY;

    // --- Логика карабканья по стенам ---
    
    // Удар о правую или левую стену
    if (posX + 60 > window.innerWidth || posX < 0) {
        speedX = 0; // Перестаем идти вбок
        // Начинаем ползти вверх или вниз (случайно)
        speedY = (Math.random() > 0.5 ? 1.5 : -1.5); 
        // Поворачиваем NPC "лицом" к стене
        el.style.transform = 'rotate(90deg)'; 
    }
    
    // Удар о верх или низ экрана
    if (posY + 60 > window.innerHeight || posY < 0) {
        speedY = 0; // Перестаем ползти вверх/вниз
        // Начинаем идти влево или вправо (случайно)
        speedX = (Math.random() > 0.5 ? 1.5 : -1.5);
        // Возвращаем нормальный поворот
        el.style.transform = 'rotate(0deg)';
    }

    // Применяем новые координаты
    el.style.left = posX + 'px';
    el.style.top = posY + 'px';
    
    // Запускаем следующий кадр анимации
    requestAnimationFrame(update);
}

// Начинаем движение через секунду после загрузки
setTimeout(update, 1000);
