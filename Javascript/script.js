const botao = document.querySelectorAll("button");
const texto = document.querySelector(".texto");
// const teste = document.getElementById('teste');
// var i = 1;
// let testeTexto = {inicio: "o botão foi apertado ", final: " vezes.", tudo: () => { let certo = testeTexto.inicio + i + testeTexto.final; i++; return certo;}};
// function escrever() {
//     document.getElementById("teste").innerHTML = testeTexto.tudo();
// }
let valorTexto = "";
for (item of botao) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*";
            valorTexto += buttonText;
            texto.value = valorTexto;
        } else if (buttonText == "CE") {
            valorTexto = "";
            texto.value = valorTexto;
        } else if (buttonText == "=") {
            checkForBracketMulti(); // automatically evaluates if no brackets
        } else {
            valorTexto += buttonText;
            texto.value = valorTexto;
        }
    });
}

