function valoraPagar() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor =  document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    valorUso = Math.ceil(tempo / 15) * valor;

    outValor.textContent = "Valor a pagar R$: "+valorUso.toFixed(2);
}
    var btCalcular=document.getElementById("btCalcular");
    btCalcular.addEventListener("click", valoraPagar);