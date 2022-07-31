    var momento = new Date()
    var hora = momento.getHours()

  
if (hora >= 0 && hora < 12 ){

    var horario = document.getElementById('hora')
    horario.innerHTML = `Bom dia Agora são: ${hora} horas`

}

if(hora >= 12 && hora < 18 ){
   

    var foto = document.getElementById('foto')
    var horario = document.getElementById('hora')
    var corpo = document.getElementById('corpo')
    horario.innerText = `Boa tarde, Agora são: ${hora} horas`
    foto.innerHTML = `<img src="imagem/boa-tarde.webp" alt="Bom dia!" id="img">`
    corpo.style.background = "#a47962"
   
}

if(hora >= 18 && hora <= 23){

    var foto = document.getElementById('foto')
    var horario = document.getElementById('hora')
    var corpo = document.getElementById('corpo')
    horario.innerText = `Boa noite, Agora são: ${hora} horas`
    foto.innerHTML = `<img src="imagem/boa-noite.jpg" alt="Bom dia!" id="img">`
    corpo.style.background = "#464948"
    console.log(hora)
}