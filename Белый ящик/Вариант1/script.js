function onClickSlider() {
    var leftEl = document.querySelector(".leftContainer");
    var rightEl = document.querySelector(".rightContainer");
    var variantNumber = document.getElementById("variant").value;

    
    // Clear all variant content
    var allVariants = document.querySelectorAll("#iii p");
    allVariants.forEach(function (p) {
        p.style.display = "none";
    });

    // Check for empty input
    if (variantNumber.trim() === "") {
        window.alert("Укажите вариант");
        document.getElementById("variant").style.borderColor = "red";
        return; // Stop further execution
    } else {
        
        document.getElementById("variant").style.borderColor = "black";
        var selectedVariant = document.getElementById("var" + variantNumber);
        if (selectedVariant) {
            selectedVariant.style.display = "flex";
        }

        if (rightEl.style.opacity === "0") {
            rightEl.style.display = "flex";
            rightEl.style.opacity = "1"; // плавное появление правого элемента
            leftEl.style.float = "left";
            document.getElementById('btn').innerText = "Свернуть задание";
            leftEl.style.width = '60%';

        } else {
            rightEl.style.opacity = "0"; // плавное исчезновение правого элемента
            leftEl.style.float = "none";
            rightEl.style.display = "none"
            document.getElementById('btn').innerText = "Открыть задание";
            leftEl.style.width = '80%';
        }
    }

    
}