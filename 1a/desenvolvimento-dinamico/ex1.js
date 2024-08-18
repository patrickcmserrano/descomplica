const readline = require("readline-sync");

// Solicitar ao usuario que digite o nome
const nome = readline.question("Digite seu nome: ");

// Solicitar ao usuario que digite o sobrenome
const sobrenome = readline.question("Digite seu sobrenome: ");

// Imprimir o nome completo no console
const nomeCompleto = `${nome} ${sobrenome}`;
console.log('Nome completo: ', nomeCompleto);

