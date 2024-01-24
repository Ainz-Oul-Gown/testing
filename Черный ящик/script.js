function onChange() {
    var select = document.getElementById("variantX");
    var iframe = document.getElementById("frm");
    iframe.src = select.value;
    select.style.borderColor = "black";

    var var1 = document.getElementById("var1");
    var var2 = document.getElementById("var2");
    var var3 = document.getElementById("var3");

    if (select.value === "Вариант 1/variant1.html") {
        var1.style.display = "flex";
        var2.style.display = "none";
        var3.style.display = "none";
    } else if (select.value === "Вариант 2/variant2.html") {
        var1.style.display = "none";
        var2.style.display = "flex";
        var3.style.display = "none";
    } else {
        var1.style.display = "none";
        var2.style.display = "none";
        var3.style.display = "flex";
    }
}



function onClickSlider() {
    if (document.getElementById("variantX").value != "") {
        var leftEl = document.querySelector(".LeftEl");
        var rightEl = document.querySelector(".RightEl");
        var select = document.getElementById("variantX");
        var var1 = document.getElementById("var1");
        var var2 = document.getElementById("var2");
        var var3 = document.getElementById("var3");

        if (select.value === "Вариант 1/variant1.html") {
            var1.style.display = "flex";
            var2.style.display = "none";
            var3.style.display = "none";
        } else if (select.value === "Вариант 2/variant2.html") {
            var1.style.display = "none";
            var2.style.display = "flex";
            var3.style.display = "none";
        } else {
            var1.style.display = "none";
            var2.style.display = "none";
            var3.style.display = "flex";
        }

        if (rightEl.style.opacity === "0") {
            rightEl.style.display = "flex";
            rightEl.style.opacity = "1";
            rightEl.style.width = "49%";
            leftEl.style.float = "left";
            leftEl.style.width = "45%";
            document.getElementById('btn').innerText = "Свернуть задание";

        } else {
            rightEl.style.opacity = "0"; 
            leftEl.style.float = "none";
            rightEl.style.display = "none"
            rightEl.style.width = "49%";
            leftEl.style.width = "100%"
            document.getElementById('btn').innerText = "Открыть задание";
        }
    } else {
        document.getElementById("variantX").style.borderColor = "red";
        alert('Укажите вариант!');
    }
    
}


