
function verificar(){

    var ano1 = document.getElementById('ano1')
    var ano = (ano1.value)
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var res = document.getElementById('res')
    var idade = 2022 - ano
    var imagem = document.getElementById('foto')
    
    if(sexo=='masc'&& idade<=30){

        res.innerHTML = `Detectamos que você é um homem de ${idade} anos`
        imagem.innerHTML = `<div id="foto">
        <img id="img" src="imagem/homem.jpg" alt="jovem"></div>`
            
       
    }else if(sexo=='masc'&&idade>30){
            res.innerHTML = `Detectamos que você é um homem de ${idade} anos`
            imagem.innerHTML = `<div id="foto">
            <img id="img" src="imagem/idoso.jpg" alt="idoso"></div>`
    

    }else if(sexo=='fem'&&idade<=30){

        res.innerHTML = `Detectamos que você é uma mulher de ${idade} anos`
        imagem.innerHTML = `<div id="foto">
        <img id="img" src="imagem/mulher.jpg" alt="mulher"></div>`


    }else if(sexo=='fem'&&idade>30){

        res.innerHTML = `Detectamos que você é uma mulher de ${idade} anos`
        imagem.innerHTML = `<div id="foto">
        <img id="img" src="imagem/idosa.jpg" alt="idosa"></div>`




    }






}
