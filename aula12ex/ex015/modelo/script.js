function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    img.src = 'manhã.jpg'
    document.body.style.background = '#F4A460'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.jpg'
    document.body.style.background = '#5F9EA0'
} else {
    img.src = 'noite.jpg'
    document.body.style.background = '#363636'
}
}