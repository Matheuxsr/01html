let nome = prompt("aula")
let text = "Matheus foi para aula hoje!"

if (text.includes(nome)) {
    alert(`A palavra ${nome}foi encontrada no texto!`);

} else {
    alert(`A palavra ${nome}não foi encontrada no texto!`);
}

