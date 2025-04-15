function calcularIMC(peso, altura) {
    return peso / (altura * altura)

}
console.log(calcularIMC(92, 1.77)); 

// NaN = Not a number
// js lê de cima para baixo, porém com o "function" ela abre uma excesão