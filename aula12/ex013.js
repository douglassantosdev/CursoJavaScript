var agora = new Date()
var hora = agora.getHours
console.log(`agora são exatamente ${agora}horas.`)
if (hora > 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 19 && hora < 0) {
    console.log('Boa Noite')
} else {
    console.log('Boa madrugada!')
}