let pessoa=require("./commons/Pessoa")();
let calculadora=require("./commons/calc");
console.log(pessoa);
console.log(calculadora.soma(5, 3));
console.log(calculadora.subtracao(5, 3));
console.log(calculadora.multiplicacao(5, 3));
console.log(calculadora.divisao(5, 3));