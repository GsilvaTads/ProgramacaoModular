


function sequencia(n) {
    var res = 1
 
    for (var i = 1; i < n; i++) {
        
        res ++
        console.log(res)       
    }
    
}

sequencia(6)


function paraBinario(dado) {
    // Se o dado for uma string, converte cada caractere em seu código ASCII
    // e, em seguida, converte o código ASCII em binário
    if (typeof dado === 'string') {
        return dado.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    }
    // Se o dado for um número, converte o número em binário
    else if (typeof dado === 'number') {
        return dado.toString(2);
    }
    // Retorna null se o tipo de dado não for suportado
    else {
        return null;
    }
}

// Exemplos de uso
console.log(paraBinario(123));  // Saída: "101010"
console.log(paraBinario("Hello"));  // Saída: "1001000 1100101 1101100 1101100 1101111"




function decimalParaBinario(numero) {
    // Verifica se o número é um número inteiro positivo
    if (Number.isInteger(numero) && numero >= 0) {
        return numero.toString(2);
    } else {
        return "Número inválido. Por favor, forneça um número inteiro positivo.";
    }
}

// Exemplos de uso
console.log(decimalParaBinario(42));  // Saída: "101010"
console.log(decimalParaBinario(255)); // Saída: "11111111"
console.log(decimalParaBinario(-1)); // Saída: "Número inválido. Por favor, forneça um número inteiro positivo."
console.log(decimalParaBinario(3.14)); // Saída: "Número inválido. Por favor, forneça um número inteiro positivo."


function numeroParaBinario(numero) {
    if (numero === 0) {
        return "0"; // Retorna "0" imediatamente se o número for zero
    }

    let binario = ""; // Inicializa uma string vazia para armazenar o número binário

    while (numero > 0) {
        // Obtém o resto da divisão por 2 e adiciona ao início da string binária
        binario = (numero % 2) + binario;
        // Divide o número por 2 para a próxima iteração
        numero = (numero / 2);
    }

    return binario;
}

// Exemplos de uso
console.log(decimalParaBinario(123));  // Saída: "101010"
console.log(decimalParaBinario("ff")); // Saída: "11111111"