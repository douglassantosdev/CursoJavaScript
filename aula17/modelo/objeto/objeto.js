let amigo = {nome: 'José',
sexo: 'M',
peso: 78.01,
engordar(n=0){
    this.peso += n
}}
amigo.engordar(5)

console.log(amigo.nome, amigo.peso)