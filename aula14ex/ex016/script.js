function contar() {
    var inu = document.getElementById('inu');
    var fn = document.getElementById('fn');
    var pn = document.getElementById('pn');
    var res = document.getElementById('res');

    var n1 = Number(inu.value);
    var n2 = Number(fn.value);
    var n3 = Number(pn.value);
    if(inu.value.length == 0 || fn.value.length == 0 || pn.value.length == 0)
        window.alert('[ERRO] - Faltam numeros!')
    else {
        for (var c = n1; c <= n2; c += n3) {
        res.innerHTML += `${c}➜`;
    }
}
 }