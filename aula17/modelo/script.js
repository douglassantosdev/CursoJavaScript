let n1 = document.getElementById('n1')
let lista = document.getElementById('numerosad')
let res = document.getElementById('res')
let nadd = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(n1.value) && !inLista(n1.value, nadd)) {
        nadd.push(Number(n1.value))
        let item = document.createElement('option')
        item.text = `Valor ${n1.value} adicionado.`
        lista.appendChild(item)
        n1.value = ''
        res.innerHTML = ''
    } else {
        window.alert(`Valor invalido ou já encontrado na lista!`)
        n1.value = ''
    }
    n1.focus()
}

function finalizar() {
    if(nadd.length == 0) {
        window.alert('Digite um numero antes de Finalizar!')
    } else {
        res.innerHTML = ''
        let soma = nadd.reduce((n, l) => n + l, 0)
        res.innerHTML += `Ao todo, temos ${nadd.length} números cadastrados <br> O maior elemento da lista é ${Math.max(...nadd)} <br> O menor valor informado foi ${Math.min(...nadd)} <br> Somando todos os valores, temos ${soma} <br> A média dos valores digitados é ${(soma / nadd.length).toFixed(2)}`
        
    }
}