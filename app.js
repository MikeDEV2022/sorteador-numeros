function sortear(){
    let total = document.getElementById("quantidade").value;
    let initial = parseInt(document.getElementById("de").value);
    let final = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("text");
    let aleatorio = [];
    for(let i = 1; i <= total; i++){
        aleatorio.push(Math.floor(Math.random() * (final - initial + 1)) + initial)
    }
    resultado.innerHTML = `Números sorteados:  ${aleatorio}`
}
