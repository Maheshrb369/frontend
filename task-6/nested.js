function printStars() {
    let n = document.getElementById("input").value;
    let text = "";

    if (n <= 0 || isNaN(n)) {
        text = "Please enter a positive number.";
    } else {
        for (let i = 1; i <= n; i++) {
            text += "*".repeat(i) + "<br>";
        }
    }

    document.getElementById("output").innerHTML = text;
}
