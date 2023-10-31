function tabuada(){
    var n1 = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    var resp = document.getElementById('res')
    
    if(n1.value.length == 0) {
        window.alert('[ERRO]  Por favor digite um numero!')
    } else {
        var n = Number(n1.value)
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}