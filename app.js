function sortear(){
    let total = document.getElementById("quantidade").value;
    let initial = parseInt(document.getElementById("de").value);
    let final = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("text");
    let aleatorio = [];
    if(initial > final){
        alert("Verifique os valores informados!");
    }else{
        for(let i = 1; i <= total; i++){
            aleatorio.push(Math.floor(Math.random() * (final - initial + 1)) + initial)
        }
        resultado.innerHTML = `Números sorteados:  ${aleatorio}`
        chamaResultado();
    }
    
}
function chamaResultado(){
    let ativador = document.querySelector(".container__botao-desabilitado");
    ativador.classList.remove("container__botao-desabilitado")
    ativador.classList.add("container__botao")
}
function reiniciar(){
    let ativador = document.getElementById("btn-reiniciar");
    if(ativador.classList == "container__botao"){
        ativador.classList.remove("container__botao");
        ativador.classList.add("container__botao-desabilitado");
        document.getElementById("quantidade").value = '';
        document.getElementById("de").value = '';
        document.getElementById("ate").value = '';
        retornaBase();
    }else if(ativador.classList == "container__botao-desabilitado"){
        alert("Faça o primeiro sorteio!")
    }
}
function retornaBase(){
    document.getElementById("text").innerText = "Números sorteados:  nenhum até agora"
}
