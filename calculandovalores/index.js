function somar() {

    var soma1 = window.document.getElementById('soma1')
    var soma2 = window.document.getElementById('soma2')
    var res = window.document.getElementById('res')

    var numerosoma1 = Number(soma1.value)
    var numerosoma2 = Number(soma2.value)
    var soma = numerosoma1 + numerosoma2
    res.innerHTML = `O resultado da soma de ${numerosoma1} e ${numerosoma2} é: ${soma}`
}
function subtrair() {

    var subtrair1 = window.document.getElementById('subtrair1')
    var subtrair2 = window.document.getElementById('subtrair2')
    var res = window.document.getElementById('res')

    var numerosubtracao1 = Number(subtrair1.value)
    var numerosubtracao2 = Number(subtrair2.value)
    var subtracao = numerosubtracao1 - numerosubtracao2
    res.innerHTML = `O resultado da Subtração de ${numerosubtracao1} e ${numerosubtracao2} é igual a : ${subtracao}`
}
function multiplicar() {

    var multiplicar1 = window.document.getElementById('multiplicar1')
    var multiplicar2 = window.document.getElementById('multiplicar2')
    var res = window.document.getElementById('res')

    var numeromultiplicacao1 = Number(multiplicar1.value)
    var numeromultiplicacao2 = Number(multiplicar2.value)
    var multiplicacao = numeromultiplicacao1 * numeromultiplicacao2
    res.innerHTML = `O resultado da multiplicação de ${numeromultiplicacao1} e ${numeromultiplicacao2} é: ${multiplicacao}`
}
function divisao() {

    var dividir1 = window.document.getElementById('divisao1')
    var dividir2 = window.document.getElementById('divisao2')
    var res = window.document.getElementById('res')

    var numerodivisao1 = Number(dividir1.value)
    var numerodivisao2 = Number(dividir2.value)
    var divisao = numerodivisao1 / numerodivisao2
    res.innerHTML = `O resultado da divisão de ${numerodivisao1} e ${numerodivisao2} é: ${divisao}`
}