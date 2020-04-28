let secret_number = Math.ceil(Math.random()*9);
let i = 0;
let block = false;
document.querySelector(".all").onclick = function() {
    if (event.target.classList.contains("number") && block == false) {
        i++;
        let this_number = event.target.innerHTML;
        if (this_number == secret_number) {
            document.querySelector("#finish").innerHTML = "Это правильно! Вы угадали! Это было число  " + this_number + "!";
            document.querySelector("#new-game").classList.add("active");
            block = true;
        }
        if (this_number > secret_number) {
            document.querySelector("#finish").innerHTML = "Секретное число меньше " + this_number;
        }
        if (this_number < secret_number) {
            document.querySelector("#finish").innerHTML = "Секретное число больше " + this_number;
        }
        document.querySelector("#popytki").innerHTML = "Попытки: " + i + "!";
    }
}
document.querySelector("#new-game").onclick = function() {
    secret_number = Math.floor(Math.random()*10);
    i = 0;
    document.querySelector("#new-game").classList.remove("active");
    block = false;
    document.querySelector("#popytki").innerHTML = "Попытки: " + i + "!";
    document.querySelector("#finish").innerHTML = "Как вы думаете, какое число загадал компьютер?";
}