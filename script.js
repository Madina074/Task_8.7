let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = null;
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;        
    }
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
            `Это число ${numberAsText(answerNumber) } ?`:
                `Легко! Это ${numberAsText(answerNumber) } ?`;
                `Или ${numberAsText(answerNumber) } ?`;

                answerField.innerText = answerPhrase;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            
            answerField.innerText = answerPhrase;
            
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue - minValue) / 2);
            orderNumber++;
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
            `Это просто. Число ${numberAsText(answerNumber) } ?`:
                `Да это же ${numberAsText(answerNumber) } .`;
                `А может ${numberAsText(answerNumber) } ?`;

                answerField.innerText = answerPhrase;
        }
    }
})
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
            `Я всегда правильно угадываю\n\u{1F60E}`:
                `Это было просто. Давай еще раз?\n\u{1F609}`;
                `Я молодец \n\u{1F60A}`;

                answerField.innerText = answerPhrase;
    }
})

function numberAsText(number) {
    let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'ноль'];
    let gaps = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let numberAsText = Math.sign(number) === -1 ? 'минус ' : '';
    let numberToText = Math.abs(number).toString();
    if (numberToText.length === 3) {
        numberAsText += hundreds[numberToText[0]];
        if (numberToText[1] + numberToText[2] > 20 && numberToText[2] != 0) {
            numberAsText += ' ' + dozens[numberToText[1] - 1] + ' ' + units[numberToText[2]];
        } else if (numberToText[1] + numberToText[2] < 20 && numberToText[1] + numberToText[2] > 10) {
            numberAsText += ' ' + gaps[numberToText[2] - 1];
        } else if (numberToText[1] + numberToText[2] == 20) {
            numberAsText += ' ' + dozens[1];
        } else if (numberToText[1] + numberToText[2] == 10) {
            numberAsText += ' ' + dozens[0];
        } else if (numberToText[1] + numberToText[2] == 00) {
            numberAsText += '';
        } else if (numberToText[2] == 0) {
            numberAsText += ' ' + dozens[numberToText[1] - 1];
        }
    } else if (numberToText.length === 2) {
        if (numberToText[1] == 0) {
            numberAsText += dozens[numberToText[0] - 1];
        } else if (numberToText[1] != 0 && numberToText[0] == 1) {
            numberAsText += gaps[numberToText[1] - 1];
        } else {
            numberAsText += dozens[numberToText[0] - 1] + ' ' + units[numberToText[1]]
        }
    } else if (numberToText.length === 1) {
        if (numberToText[0] == 0) {
            numberAsText += units[10];
        } else {
            numberAsText += units[numberToText[0]];
        }
    }
    return numberAsText.length < 20 ? numberAsText : number;
}