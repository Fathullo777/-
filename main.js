let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    const resultDiv = document.getElementById('result');
    
    // Сбросим класс результата перед новой попыткой
    resultDiv.className = '';
    resultDiv.style.opacity = '0'; // Начальное состояние - невидимо

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultDiv.textContent = 'Пожалуйста, введите число от 1 до 100.';
        resultDiv.className = '';
    } else if (userGuess === randomNumber) {
        resultDiv.textContent = `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        resultDiv.className = 'correct';
        document.getElementById('resetButton').style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultDiv.textContent = 'Слишком низко! Попробуйте еще раз.';
        resultDiv.className = 'too-low';
    } else {
        resultDiv.textContent = 'Слишком высоко! Попробуйте еще раз.';
        resultDiv.className = 'too-high';
    }

    // Анимация появления сообщения
    setTimeout(() => {
        resultDiv.style.opacity = '1'; // Делаем сообщение видимым
    }, 100); // Задержка перед показом
});

document.getElementById('resetButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    this.style.display = 'none';
});