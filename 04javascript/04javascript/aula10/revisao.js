// criar um loop while
// de 10 números, onde a sequência começa com 0 e 1 
// a cada número subsequente e a soma dos dois núemros anteriores 

let num1 = 0, num2 = 1

let contador = 0

while (contador <= 10) {
console.log(`${contador}: ${num1}`);

soma = num1 + num2
num1 = num2
num2 = soma
contador++
}

 