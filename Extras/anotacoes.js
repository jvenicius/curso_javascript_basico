// Aula 06

// Alterar de String para Number
Number(n)
Number.parseInt(n)
Number.parseFloat(n)

// Alterar de Number para String

String(n)
n.toString()

// Formatação de String - String template

var n1 = Number(5)
var n2 = Number(2.6)
var s = n1 + n2
console.log(`A soma entre ${n1} e ${n2} é ${s}`)

// Formatar String

var texto = 'José'
var tamanho = texto.length()
var maiuscula = texto.toUpperCase()
var minuscula = texto.toLowerCase()
console.log(texto, tamanho, maiuscula, minuscula)

// Formatar Numbers

var n1 = 152.4823
var casas_decimais = n1.toFixed(2)
var trocar_ponto_por_virgula = n1.toFixed(2).replace('.', ',')
var moeda_brasileira = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(casas_decimais, trocar_ponto_por_virgula, moeda_brasileira)

// Aula 07 - Operadores (parte 1)
// Operadores Aritméticos

var soma = 5 + 2
var subtração = 5 - 2
var multiplicacao = 5 * 2
var divisão = 5 / 2
var resto = 5 % 2
var potencia = 5 ** 2

console.log(resto)

// Ordem de precedência
// ()
// **
// *,/,%
// +,-

// Operadores de atribuição

var n = 3

n = n + 4
n = n - 4
n = n * 4
n = n / 4
n = n ** 4
n = n % 4

n += 4
n -= 4
n *= 4
n /= 4
n **= 4
n %= 4

console.log(n)

// Operadores de incremento

var x = 5

x--
--x
x++
++x

console.log(x)

// Aula 08 - Operadores (parte 2)

// Relacionais

var n1 = 5
var n2 = 8

n1 > n2 // menor que
n1 < n2 // menor que
n1 >= n2 // maior ou igual a
n1 <= n2 // menor ou igual a
n1 == n2 // igual a
n1 != n2 // diferente de
n1 === n2 // operador identidade (verifica o valor e o tipo)

// Lógicos

// ! (não é a - negação)
// && (a e b - conjução)
// || (a ou b - dijunção)

// Ordem de precedência
    // Aritméticos
    // Relacionais
    // Lógicos (!, &&, ||)



// Ternário

var média = 5.5
var situação = média > 7?'Aprovado':'Reprovado'

console.log(situação)

// Eventos é tudo aquilo que possa acontecer com a <div>
// Eventos de mouse (onclick, onmouseenter)

    // <div id="area">
    // interaja...
    // </div>

    // <script>
    // var area = window.document.getElementById('area')

    // area.addEventListener('click', clicar)
    // area.addEventListener('mouseenter', entrar)
    // area.addEventListener('mouseout', sair)

    // function clicar() {    
    //     area.innerText = 'Clicou!'
    //     area.style.background = 'red'
    //     area.style.color = 'black'
    // }
    // function entrar() {
    //     area.innerText = 'Entrou!'
    //     area.style.background = 'blue'
    //     area.style.fontStyle = 'italic'
    // }
    // function sair() {
    //     area.innerText = 'Saiu!'
    //     area.style.background = 'black'
    //     area.style.color = 'white'
    // }
    // </script>

// CONDIÇÕES ANINHADAS

// IMPORTAR DATA DO COMPUTADOR 
var data = new Date()
var horas = data.getHours()
console.log(horas)

// switch... case
var bairro = 'Fragata';
var taxaEntrega;
switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00;
        break;
    case "Fragata":
    case "Três Vendas":
        taxaEntrega = 7.00;
        break;
    case "Laranjal":
        taxaEntrega = 10.00;
        break;
    default:
        taxaEntrega = 8.00;
}
console.log(`A taxa de entrega é R$ ${taxaEntrega.toFixed(2)}.`);
