function numeroParaBinario(numero) {
    if (numero === 0) {
        return "0"; // Retorna "0" imediatamente se o número for zero
    }

    let binario = ""; // Inicializa uma string vazia para armazenar o número binário

    while (numero > 0) {
        // Obtém o resto da divisão por 2 e adiciona ao início da string binária
        binario = (numero % 2) + binario;
        // Divide o número por 2 para a próxima iteração
        numero = Math.floor(numero / 2); // Use Math.floor para arredondar para baixo o resultado da divisão
    }

    return binario;
}

// Exemplos de uso
console.log(numeroParaBinario(123));  // Saída: "1"
console.log(numeroParaBinario(255)); // Saída: "11111111"