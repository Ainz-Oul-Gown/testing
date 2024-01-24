function calculateTravelTime() {

    var departureDateTime = new Date(document.getElementById('departureDateTime').value);
    var arrivalDateTime = new Date(document.getElementById('arrivalDateTime').value);

    const departureDateTimeInput = document.getElementById('departureDateTime');
    const arrivalDateTimeInput = document.getElementById('arrivalDateTime');

    arrivalDateTimeInput.style.borderColor = 'lightgray';
    departureDateTimeInput.style.borderColor = 'lightgray';


    var timeDiff = arrivalDateTime - departureDateTime;
    if (timeDiff === 0) {
        arrivalDateTimeInput.style.borderColor = 'red';
        departureDateTimeInput.style.borderColor = 'red';
        alert('Дата отправления не может равняться дате прибытия!');
    }
    console.log(departureDateTime + "  " + arrivalDateTime + ": " + timeDiff);
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    var result = " " + days + " дней, " + hours + " часов, " + minutes + " минут";
    document.getElementById('resultValue').innerHTML = result;

    // Обновление таймера
    updateCountdown(timeDiff);
}

function updateCountdown(timeDiff) {
    var countdown = document.getElementById('countdownValue');

    if (timeDiff > 0) {
        var timeInterval = setInterval(function () {
            timeDiff -= 1000; // Уменьшаем время на 1 секунду
            if (timeDiff <= 0) {
                clearInterval(timeInterval); // Остановка таймера, если время истекло
                countdown.innerHTML = "Время вышло!";
            } else {
                var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                var countdownText = " " + days + " дней, " + hours + " часов, " + minutes + " минут";
                countdown.innerHTML = countdownText;
            }
        }, 1000); // Обновляем каждую секунду
    }
}