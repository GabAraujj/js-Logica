function promocao() {
    var inProduto =  document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPreco = document.getElementById("outPreco");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var promo = preco /2;
    var desconto =  preco * 2 + promo; 

    outProduto.textContent= produto+"- Promoção: Leve 3 por R$: "+ desconto.toFixed(2);
    outPreco.textContent="O 3° Produto custa apenas R$: "+promo.toFixed(2);
}
    var btVer =  document.getElementById("btVer");
    btVer.addEventListener("click", promocao);