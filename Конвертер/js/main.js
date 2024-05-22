function calculate() {
    let exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(exchangeRate) || isNaN(amount) || exchangeRate <= 0 || amount <= 0) {
        alert("Будь ласка, введіть коректні дані.");
        return;
    }
    let result = (amount / exchangeRate).toFixed(2);
    document.getElementById("result").innerText = result + " доларів";
}

function clearFields() {
    document.getElementById("exchangeRate").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("result").innerText = "";
}