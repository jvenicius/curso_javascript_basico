function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        // BOM DIA!
        img.src = "fotomanha.png"
        document.body.style.background = "#e9ddcf"
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = "fototarde.png"
        document.body.style.background = "#f3a84d"
    } else {
        // BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = "#1c3657"
    }
}


