function mostrarPromocao() {
    var inMed = document.getElementById("inMed"); // cadastra as variavel inMed
    var inValor =  document.getElementById("inValor"); //cadastra a variavel inValor
    var outNome = document.getElementById("outNome"); //cadastra a variavel outNome
    var outPreco = document.getElementById("outPreco"); //cadastra a variavel outPreco

    var nome = (inMed.value); //capta informações dentro da id inMed
    var preco = Number(inValor.value); // capta informações dentro da id inValor

    var soma = Math.floor(preco * 2); //Parte do calculo

    outNome.textContent= "Remédio: "+ nome; //Saida de resposta ou muda informaçõe dentro da id outNome
    outPreco.textContent="Valor com desconto R$: "+soma; // Saida de resposta ou muda infomações dentro da ir outPreco
}
    var btVer = document.getElementById("btVer"); // Cadastra botão btVer
    btVer.addEventListener("click", mostrarPromocao); //Cria um evento do tipo ouvinte 
    
    
    
