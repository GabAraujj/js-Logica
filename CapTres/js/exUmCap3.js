function notaAluno() { //cadastro das variaveis que serao usadas na funcao
    var inNome = document.getElementById("inNome");
    var inNota = document.getElementById("inNota");
    var inNotaDois = document.getElementById("inNotaDois");
    var outMedia = document.getElementById("outMedia");
    var outResultado = document.getElementById("outResultado");

    //Obter os dados desses campos
    var nome = inNome.value; 
    var notaUm = Number(inNota.value);
    var notaDois = Number(inNotaDois.value);

    //parte dos calculos e condições
    var total = (notaUm+notaDois)/2;

    if(total>=7){ //se der vedadeiro
        outMedia.textContent="Média das notas: "+total;
        outResultado.textContent="Parabéns! "+nome+" você foi aprovado(a)!"
    } else if(total<=5) { //se der verdadeiro também
        outMedia.textContent="Média das notas: "+total;
        outResultado.textContent="Situação Regular "+nome+" você foi reprovado(a)"
    } 
    }   //fechamos a funcao e cadastramos o botão que dará inicio a ação
        // também cadastramos um evento chamado "click"
        var btExibir = document.getElementById("btExibir");
        btExibir.addEventListener("click", notaAluno);
        




