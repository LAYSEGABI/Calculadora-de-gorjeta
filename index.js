
function uptade() {
    let conta = Number(document.getElementById('yourBill').value)
    let gorjetaPercentual = document.getElementById('tipInput').value
    let quantPessoas = document.getElementById('splitInput').value

    let valorGorjeta = conta * (gorjetaPercentual / 100)
    let totalConta = valorGorjeta + conta
    let totalIndividual = totalConta / quantPessoas

    document.getElementById('tipPercent').innerHTML = gorjetaPercentual + "%"
    document.getElementById('tipValue').innerHTML = 'R$' + valorGorjeta.toFixed(2)
    document.getElementById('totalWithTip').innerHTML = 'R$' + totalConta.toFixed(2)
    document.getElementById('splitValue').innerHTML = quantPessoas
    document.getElementById('billEach').innerHTML = 'R$' + totalIndividual.toFixed(2)

}
