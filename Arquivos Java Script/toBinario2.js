function decimalParaBinario(numero) {
    // Verifica se o número é um número inteiro positivo
    if (Number.isInteger(numero) && numero >= 0) {
        return numero.toString(2);
    } else {
        return "Número inválido. Por favor, forneça um número inteiro positivo.";
    }
}

// Exemplos de uso
console.log(decimalParaBinario(123));  // Saída: "101010"






