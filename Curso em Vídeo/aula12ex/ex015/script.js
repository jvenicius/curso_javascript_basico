function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radiosex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "homem"
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-crianca-h.png')
            } else if (idade < 18){
                // Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            } else{
                // Idoso
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        } else if (fsex[1].checked){
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 18){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}