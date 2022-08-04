
function gerartabuada(){
var  numero = 0
var total = 0
var numero1 = document.getElementById('numero')
var valor = Number(numero1.value)
var valores = document.getElementById('select')
var final = document.getElementById('valor')


if(valor==''){

    alert (`Por favor digite um número`)



}else{


    valores.innerHTML = ""
while(numero<=9){

    numero++
    total = valor*numero

    valores.innerHTML += `
    <option value="digite">${numero} x ${valor} = ${total}</option>`
    
}


}



}