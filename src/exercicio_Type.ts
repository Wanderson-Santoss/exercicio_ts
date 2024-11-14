function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(3, 4);
const resultadoSaudacao = saudacao("Wanderson");

console.log(resultadoMultiplicacao);
console.log(resultadoSaudacao);