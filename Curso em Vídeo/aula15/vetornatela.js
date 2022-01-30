let valores = [8,4,6,5,2,0,1,8,7,9]

// for (let i = 0; i < valores.length; i++) {
//     console.log(`A posição ${i} possui valor ${valores[i]}.`)
// }

for (let item in valores) {
    console.log(`A posição ${item} possui valor ${valores[item]}.`)
}

let num = valores.indexOf(5)
if (num == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${num}`)
}
