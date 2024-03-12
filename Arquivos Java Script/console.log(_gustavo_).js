console.log('gustavo')
x 
console.log(typeof(x))


b1 = 2  // constante
e1 = 8
console.log(Math.pow(b1, e1))

//============================

res = b1
//  calcular a potencia
console.log(res) // 256


for (var i = 1; i < e1; i++); { 
        res = res * b1;
}




b1 = 2
e1 = 8
res = e1

for (var i = 1; i < e1; i++); {
    res = res * b1;
}

console.log(res)
for (var i = 1; i < e1; i++); {
    res = res * b1;
}

console.log(res)


b2 = 5
e2 = 3
res = b2

for (var i = 1; i < e2; i++); {
    res = res * b2;
}

console.log(res)



//----------------------- 

    // nome que quiser, exemplo pow
    // var = escopo de função

    function pow(base, exp) {
        // tratando casos especiais, se exp for 0, ou tratar negativos, tratar elementos não numeros, decimal, etc
        // bitwise op: em IS tornar um mun inteiro
        if (exp == 0) return 1

        var res = base

        for (var i = 1; i < exp; i++) res *= base
        return res
    }

console.log(pow(2, 5))  // 2 e 5 são constantes literias, 
console.log(pow(5, 0))  // esperado 1, tratado caso especial no top com if
console.log(pow(2, 5))  
