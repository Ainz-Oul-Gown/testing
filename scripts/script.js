window.onload = function () {
    let openWindow = document.querySelectorAll('.card-item');
    let closeWindow = document.getElementById('close');
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content-title');

    let cardTextArray =
        ["Практическая работа 1",
            "Практическая работа 2",
            "Практическая работа 3",
            "Практическая работа 4",
            "Практическая работа 5",
            "Практическая работа 6",
            "Практическая работа 7",
            "Практическая работа 8",
            "Практическая работа 9",
            "Практическая работа 10",
            "Практическая работа 11"
        ];

    openWindow.forEach((item, index) => {
        item.addEventListener('click', () => {
            modalContent.textContent = cardTextArray[index];
            modal.style.display = 'flex';
        });
    });

    closeWindow.addEventListener('click', () => {
        modal.style.display = 'none';
    });

// Чтобы обеспечить закрытие модального окна по клику вне его области, можно добавить следующий обработчик событий
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}