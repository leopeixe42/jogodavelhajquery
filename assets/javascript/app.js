//Função de verificador Horizontal
function verificadorhorizontal(){
    var combinacao;
    var simbolo;
    for(var i = 0; i<3; i++){
        if(i==0){
            simbolo = "a";
        }
        else if(i==1){
            simbolo = "b";
        }
        else if(i==2){
            simbolo = "c";
        }

        for(var j = 1; j<=3; j++){
            combinacao += $("button[name='" + simbolo + j + "']").text();

            if (combinacao == "undefinedXXX") {
                alert("Ganhador X");
                return;
            }

            else if(combinacao == "undefinedOOO"){
                alert("Ganhador O");
                return;
            }
        }

        combinacao = "undefined";
    }
}

//Função de verificação Vertical
function verificadorvertical(){
    var combinacao;
    var simbolo;

    for(var j = 1; j<=3; j++){

        for(var i = 0; i<3; i++){

            if(i==0){
                simbolo = "a";
            }
            else if(i==1){
                simbolo = "b";
            }
            else if(i==2){
                simbolo = "c";
            }

            combinacao += $("button[name='" + simbolo + j + "']").text();

            if (combinacao == "undefinedXXX") {
                alert("Ganhador X");
                return;
            }
            else if(combinacao == "undefinedOOO"){
                alert("Ganhador O");
                return;
            }
        }
        combinacao = "undefined";
    }
}

//Função para verificador Diagonal

function verificadordiagonal(){
    var combinacaod1 = "undefined"
    var combinacaod2 = "undefined"
    combinacaod1 += $("button[name='a1']").text();
    combinacaod1 += $("button[name='b2']").text();
    combinacaod1 += $("button[name='c3']").text();
    if (combinacaod1 == "undefinedXXX") {
        alert("Ganhador X");
        return;
    }
    else if(combinacaod1 == "undefinedOOO"){
        alert("Ganhador O");
        return;
    }
    combinacaod2 += $("button[name='a3']").text();
    combinacaod2 += $("button[name='b2']").text();
    combinacaod2 += $("button[name='c1']").text();
    if (combinacaod2 == "undefinedXXX") {
        alert("Ganhador X");
        return;
    }
    else if(combinacaod2 == "undefinedOOO"){
        alert("Ganhador O");
        return;
    }
}

//Função para mudar de X para O
function mudarjogador() {
    var el = $("label[id='jogador']");
    var simbolo = el.text();
    if(simbolo == "X"){
        el.text("O");
    }

    else{
        el.text("X");
    }
}

// Função para quando clicar mudar de X para O
$("button").click(function() {
    var simbolo = $("label[id='jogador']").text();
    var click = parseInt($("input[type='hidden']").val());
    click = parseInt(click) + 1;
    $("input[type='hidden']").val(click);
    $(this).text(simbolo);

    if(click == 9){
        alert("Deu velha !")
    }

    mudarjogador();
    verificadorhorizontal();
    verificadorvertical();
    verificadordiagonal();
});
