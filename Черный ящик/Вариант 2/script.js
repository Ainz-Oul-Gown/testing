document.getElementById('fuel-calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const distance = parseFloat(document.getElementById('distance').value);
  const fuelAmount = parseFloat(document.getElementById('fuel-amount').value);

  const fuelConsumption = calculateFuelConsumption(distance, fuelAmount);
  displayResult(fuelConsumption);
});

function calculateFuelConsumption(distance, fuelAmount) {
  const fuelConsumption = fuelAmount / distance * 100; // Расход топлива в литрах на 100 км
  return fuelConsumption.toFixed(2); // Округляем до двух знаков после запятой
}

function displayResult(fuelConsumption) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "Ожидаемый расход топлива: "+fuelConsumption+" л/100км";
}

function onClickSlider() {
    var leftEl = document.querySelector(".LeftEl");
    var rightEl = document.querySelector(".RightEl");

    if (rightEl.style.opacity === "0") {
        rightEl.style.display = "flex";
        rightEl.style.opacity = "1"; // плавное появление правого элемента
        leftEl.style.float = "left";
        document.getElementById('btn').innerText = "Свернуть задание";
        leftEl.style.width = "40%";

    } else {
        rightEl.style.opacity = "0"; // плавное исчезновение правого элемента
        leftEl.style.float = "none";
        rightEl.style.display = "none";
        leftEl.style.width = "100%";
        document.getElementById('btn').innerText = "Открыть задание";
    }
}
