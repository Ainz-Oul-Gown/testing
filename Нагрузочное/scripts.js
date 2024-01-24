function runTests() {
    const url = document.getElementById('urlInput').value;
    const testCount = parseInt(document.getElementById('testCountInput').value, 10);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    let totalDuration = 0;
    let completedTests = 0;
    const testResults = {};
    

    if (testCount > 100) {
        document.getElementById('testCountInput').style.borderColor = "red";
        if (url === '') {
            document.getElementById('urlInput').style.borderColor = "red";
            alert('Введите ссылку на сайт!\nКоличество проверок не должно превышать 100!');
            return;
        }
        alert('Количество проверок не должно превышать 100!');
        return;
    } else if (document.getElementById('testCountInput').value === '' || testCount === 0) {
        document.getElementById('testCountInput').style.borderColor = "red";
        if (url === '') {
            document.getElementById('urlInput').style.borderColor = "red";
            alert('Введите ссылку на сайт!\nВведите количество проверок!');
            return;
        }
        alert('Введите количество проверок!');
        return;
    } else if (url === '') {
        document.getElementById('urlInput').style.borderColor = "red";
        alert('Введите ссылку на сайт!');
        return;
    }

    try {
        new URL(url); // Если URL некорректный, будет сгенерировано исключение
    } catch (error) {
        // Ошибочный URL
        urlInput.style.borderColor = "red";
        alert('Введите корректную ссылку на сайт!(' + error + ')');
        return;
    }

    for (let i = 1; i <= testCount; i++) {
        const startTime = performance.now();
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            const endTime = performance.now();
            const duration = (endTime - startTime) / 1000; // Переводим миллисекунды в секунды
            totalDuration += duration;

            resultsDiv.innerHTML += 'Тест ' + i + ': Время выполнения - ' + duration.toFixed(2) + ' с<br>';
            completedTests++;
            // Проверяем, выполнены ли все тесты
            if (completedTests === testCount) {
                const averageDuration = (totalDuration / testCount).toFixed(2);
                resultsDiv.innerHTML += 'Среднее время выполнения всех тестов - ' + averageDuration + ' с<br>';
                resultsDiv.innerHTML += 'Общее количество выполненных тестов - ' + testCount;
            }
        };

        xhr.onerror = function () {
            resultsDiv.innerHTML += 'Тест ' + i + ': Произошла ошибка при выполнении теста<br>';

            // Проверяем, выполнены ли все тесты
            if (completedTests === testCount) {
                const averageDuration = (totalDuration / testCount).toFixed(2);
                if (totalDuration === 0) {
                    resultsDiv.innerHTML = 'Произошла ошибка при выполнении тестов. Пожалуйста, проверьте ссылку.';
                } else {
                    resultsDiv.innerHTML += 'Среднее время выполнения всех тестов - ' + averageDuration + ' с<br>';
                    resultsDiv.innerHTML += 'Общее количество выполненных тестов - ' + testCount;
                }
            }
        };

        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/' + url, true);
        xhr.send();
    }
}


function onFocus() {
    var urlInp = document.getElementById('urlInput');
    var countTestInp = document.getElementById('testCountInput');

    urlInp.style.borderColor = "lightgray";
    countTestInp.style.borderColor = "lightgray";
}

function onClickSlider() {
    var leftEl = document.querySelector(".leftEl");
    var rightEl = document.querySelector(".rightEl");

    if (rightEl.style.opacity === "0") {
        rightEl.style.display = "flex";
        rightEl.style.opacity = "1"; // плавное появление правого элемента
        leftEl.style.float = "left";
        document.getElementById('btn').innerText = "Свернуть задание";

    } else {
        rightEl.style.opacity = "0"; // плавное исчезновение правого элемента
        leftEl.style.float = "none";
        rightEl.style.display = "none"
        document.getElementById('btn').innerText = "Открыть задание";
    }
}