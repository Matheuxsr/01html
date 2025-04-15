let notas = [9 + 6 + 8]
let média = notas / 3   
let resultado = média.toFixed(2) 

if (média >= 7) {
    alert(`Parabéns! Você foi aprovado, sua média é: ${resultado}`);
} else if (média > 5) {
    alert(`Opa! Você ficou de recuperação, sua média é: ${resultado}`);
} else {
    (média <= 5) 
    alert(`Sinto Muito! Você foi reprovado, sua média é: ${resultado}`);
}


