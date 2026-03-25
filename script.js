// Простая функция "ИИ" для NPC
async function askAI(question) {
    const speech = document.getElementById('speech');
    speech.innerText = "Думаю...";
    
    // Имитация ИИ: он будет отвечать на ключевые слова
    setTimeout(() => {
        let answer = "Я просто пузырек, но я тебя слушаю!";
        if(question.includes("привет")) answer = "Привет, Семён! Как дела в 7 классе?";
        if(question.includes("кто ты")) answer = "Я твой личный NPC в стиле Frutiger Aero!";
        if(question.includes("скучно")) answer = "Давай поползаем по экрану!";
        
        speech.innerText = answer;
    }, 2000);
}

// Вызываем ИИ при клике на NPC
document.getElementById('npc').addEventListener('click', () => {
    askAI("привет"); // Здесь можно добавить ввод текста в будущем
});
