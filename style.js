let i = 0;
let num = prompt('назови число');

if (num === null) {
    alert("ты нажал на отмену");
} else if (num === "") {
    alert("вы ничего не ввели");
} else if (num % 2 === 0) {
    while (i < num) {
        document.write("<h1>Hello, World!</h1>");
        i++;
    }
} else if (num % 2 === 1 || num % 2 === -1) {
    while (i < num) {
        document.write("<h1>Hello, World!</h1>");
        i++;
    }
} else {
    alert("вы ввели не число");
}