import divisao from "./Operacao/divisao";
import multiplicar from "./Operacao/multiplicar"; 
import somar from "./Operacao/somar";
import subtrair from "./Operacao/subtrair";

const calculator = document.querySelector('calculadora')
const keys = calculator.querySelector('.calculator__keys')

const somar = require("./somar").default;
const subtrair = require("./Pastas/subtrair").default;
const multiplicar = require("./Pastas/multiplicar").default;
const dividir = require("./dividir");

console.log(somar(10, 5)); // output: 15
console.log(subtrair(10, 5)); // output: 5
console.log(multiplicar(10, 5)); // output: 50
console.log(dividir(10, 5)); // output: 2
console.log(dividir(10, 0)); // output: "Divisão por zero não é permitida"
console.log(dividir(0, 0)); // output: "Não pode ser dividido por zero"


