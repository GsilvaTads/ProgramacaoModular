function numeroParaBinario(numero) {
    if (numero === 0) {
        return "0"; // Retorna "0" imediatamente se o número for zero
    }

    if (numero < 0) {
    return "Número inválido. Por favor, forneça um número inteiro positivo.";
    }

    if(typeof numero === "string"){
        return "Número inválido. Por favor, forneça um número inteiro positivo.";
    }
    
  var stringBinario = ""; // string vazia para armazenar o número binário

    while (numero > 0) {
        // Obtém o resto da divisão por 2 e adiciona ao início da string binária
        stringBinario = (numero % 2) + stringBinario;
        // Divide o número por 2 para a próxima iteração
        console.log(numero % 2);
        numero = (numero / 2 | 0); // Use Math.floor para arredondar para baixo o resultado da divisão
        console.log(numero);
    }

    return stringBinario;
}

// Resultato:
console.log(numeroParaBinario(123));