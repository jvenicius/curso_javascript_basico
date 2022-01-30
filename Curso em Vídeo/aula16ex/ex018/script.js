let txtnum = document.getElementById("txt-num")
let selvec = document.getElementById("sel-vec")
let res = document.getElementById("res")
let vec = []

function adicionar() {
    if (txtnum.value.length == 0 || txtnum.value < 1 || txtnum.value > 100) {
        alert("[ERRO] Por favor insira um valor válido!")
    } else {
        let num = Number(txtnum.value)
        const verificar = vec.indexOf(num)
        if (verificar != -1) {
            alert("O valor inserido já está na lista, por favor altere o valor e tente novamente!")
        } else {
            vec.push(num)
            let item = document.createElement("option")
            item.text = `Valor ${num} adicionado.`
            item.value = `num${num}`
            selvec.appendChild(item)
            res.innerHTML = ''
        }
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    if (vec.length == 0) {
        alert("Por favor insira valores na lista!")    
    } else {
        let len = vec.length
        let maximo = vec.reduce((maximo,x) => Math.max(maximo,x))
        let minimo = vec.reduce((minimo,x) => Math.min(minimo,x))
        let soma = vec.reduce((soma,x) => soma + x)
        let media = soma/vec.length
        res.innerHTML += `<p> Ao todo, temos ${len} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maximo}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${minimo}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
    txtnum.value = ''
    txtnum.focus()
}