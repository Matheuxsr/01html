let dia1 = "Segunda-Feira"
let dia2 = "Terça-Feira"
let dia3 = "Quarta-Feira"
let dia4 = "Quinta-Feira"
let dia5 = "Sexta-Feira"
let dia6 = "Sábado"
let dia7 = "Domingo"

let diaDaSemana = dia4

switch (diaDaSemana) {
    case dia1:
        console.log("Hoje é Segunda-Feira 😒");
        break;
    case dia2:
        console.log("Hoje é Terça-Feira 😑");
        break;
    case dia3:
        console.log("Hoje é Quarta-Feira 😐");
        break;
    case dia4:
        console.log("Hoje é Quinta-Feira 😁");
        break;
    case dia5:
        console.log("Hoje é Sexta-Feira 🤩");
        break;
    case dia6:
        console.log("Hoje é Sábado 🥳");
        break;
    case dia7:
        console.log("Hoje é Domingo 😪");
        break;

    default: console.log("Desculpe! O valor inserido é inválido."); 
        break;

}