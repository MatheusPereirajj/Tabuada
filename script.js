function tabuada() {
    let num = document.getElementById('txtn') // numero a ser multiplicado.
    let tab = document.getElementById('resultado') // onde vai ficar o resultado.
if (num.value.length == 0) {
    window.alert('preencha o campo que se encontra em branco.')
} else{
    let n = Number(num.value); // primeiro tenho que informar para a variável que: o que ela irá receber será um número, depois informo que deverá pegar o valor da variável 'num'.
    let c = 1 //aqui será o contador.
    tab.innerHTML = '' ;
    while (c <= 10) {
        let item = document.createElement('option');
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}


}