function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: no se puede dividir por 0."
            }
            return num1 / num2;
        default:
            return "Error operador no valido.";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 0, "/"));
console.log(calculadora(10, 5, "%"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(0.34, 5, "*"));