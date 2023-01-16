 document.getElementById('btnStart').addEventListener('click', function () {
    document.querySelector('.title-page').classList.add('hidden'); 
    document.querySelector('.value-range').classList.remove('hidden'); 
    document.querySelector('.valueRange').classList.remove('hidden'); 
    document.querySelector('.form-inline').classList.remove('hidden');
    document.querySelector('#btnStart').classList.add('hidden'); 
    document.querySelector('#btnProceed').classList.remove('hidden'); 
})

document.getElementById('btnProceed').addEventListener('click', function () { 
    document.querySelector('.value-range').classList.add('hidden');
    document.querySelector('.terms').classList.remove('hidden'); 
    document.querySelector('.valueRange').classList.add('hidden'); 
    document.querySelector('.form-inline').classList.add('hidden');
    document.querySelector('.guessNumber').classList.remove('hidden');
    document.querySelector('#btnProceed').classList.add('hidden'); 
    document.querySelector('#btnPlay').classList.remove('hidden'); 
    minValue = parseInt(document.querySelector('#formInputMin').value);
    maxValue = parseInt(document.querySelector('#formInputMax').value);
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue];
    }
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }
    guessNumber.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
})

document.getElementById('btnPlay').addEventListener('click', function () { 
    document.querySelector('.terms').classList.add('hidden'); 
    document.querySelector('.question').classList.remove('hidden');
    document.querySelector('.guessNumber').classList.add('hidden');
    document.querySelector('.no-gutters').classList.remove('hidden'); 
    document.querySelector('#btnPlay').classList.add('hidden'); 
    document.querySelector('#btnLess').classList.remove('hidden');
    document.querySelector('#btnEqual').classList.remove('hidden');
    document.querySelector('#btnOver').classList.remove('hidden');
    document.querySelector('.btn-link').classList.remove('hidden');

    let answerNumber = Math.floor((minValue + maxValue) / 2); 
    let orderNumber = 1; 
    let gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    
    document.getElementById('btnLess').addEventListener('click', function () { 
        if (gameRun) {
            if (minValue === maxValue || minValue == answerNumber) {
                const phraseRandom = Math.round(Math.random() * 3);
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                        break;

                    case 1:
                        answerPhrase = `Я сдаюсь..\n\u{1F92F}`
                        break;

                    case 2:
                        answerPhrase = `Упс! Неправильное число. \n\u{1F9D0}`
                        break;

                }
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                maxValue = answerNumber - 1; 
                answerNumber  = Math.floor((maxValue - minValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const phraseRandom = Math.round(Math.random() * 3); 
                switch (phraseRandom) {
                    case 1:
                        answerPhrase = `Это просто. Число ${numberAsText(answerNumber) } ?`
                        break;

                    case 2:
                        answerPhrase = `Да это же ${numberAsText(answerNumber) } !`
                        break;

                    case 3:
                        answerPhrase = `А может ${numberAsText(answerNumber) } ?`
                        break;

                }
                answerField.innerText = answerPhrase;
            }
        }
    })

    document.getElementById('btnOver').addEventListener('click', function () { 
        if (gameRun) {
            if (minValue === maxValue) {
                const phraseRandom = Math.round(Math.random() * 3);
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                        break;

                    case 1:
                        answerPhrase = `Я сдаюсь..\n\u{1F92F}`
                        break;

                    case 2:
                        answerPhrase = `Упс! Неправильное число. \n\u{1F9D0}`
                        break;
                }
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                minValue = answerNumber + 1; 
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const phraseRandom = Math.round(Math.random() * 3);
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Это число ${numberAsText(answerNumber) } ?`
                        break;

                    case 1:
                        answerPhrase = `Легко! Это ${numberAsText(answerNumber) } ?`;
                        break;

                    case 2:
                        answerPhrase =  `Или ${numberAsText(answerNumber) } ?`
                        break;

                }
                answerField.innerText = answerPhrase;
            }
        }
    })

    document.getElementById('btnEqual').addEventListener('click', function () { 
        if (gameRun) {
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                    break;

                case 1:
                    answerPhrase = `Это было просто. Давай еще раз?\n\u{1F609}`
                    break;

                case 2:
                    answerPhrase =  `Я молодец \n\u{1F60A}`
                    break;

            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        }
    })
})

document.getElementById('btnRetry').addEventListener('click', function () { 
    document.querySelector('.question').classList.toggle('hidden'); 
    document.querySelector('.value-range').classList.toggle('hidden'); 
    document.querySelector('.no-gutters').classList.toggle('hidden'); 
    document.querySelector('.valueRange').classList.toggle('hidden'); 
    document.querySelector('.form-inline').classList.toggle('hidden');
    document.querySelector('#btnLess').classList.toggle('hidden'); 
    document.querySelector('#btnEqual').classList.toggle('hidden'); 
    document.querySelector('#btnOver').classList.toggle('hidden'); 
    document.querySelector('.btn-link').classList.toggle('hidden'); 
    document.querySelector('#btnProceed').classList.toggle('hidden'); 
    document.querySelector('#formInputMin').value = '';
    document.querySelector('#formInputMax').value = '';
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue];
    }
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }
    guessNumber.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;

    document.getElementById('btnProceed').addEventListener('click', function () { 
        document.querySelector('.value-range').classList.add('hidden'); 
        document.querySelector('.terms').classList.remove('hidden'); 
        document.querySelector('.valueRange').classList.add('hidden'); 
        document.querySelector('.form-inline').classList.add('hidden'); 
        document.querySelector('.guessNumber').classList.remove('hidden'); 
        document.querySelector('#btnProceed').classList.add('hidden'); 
        document.querySelector('#btnPlay').classList.remove('hidden');
    })
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