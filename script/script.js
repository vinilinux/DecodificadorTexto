function descriptografar(){
    visibilidadeDosElementos();
    let texto = document.getElementById("textoSemCriptografia").value;
    
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    console.log(texto)

    mostrarNaTela(texto);
  
}

function criptografar() {
    visibilidadeDosElementos();
    let input = document.getElementById("textoSemCriptografia").value;
    
    let textoCriptografado = [];
    for (let index = 0; index < input.length; index++) {
        if(input[index] == 'e'){
            textoCriptografado[index] = 'enter';
        } else if (input[index] == 'i') {
            textoCriptografado[index] = 'imes';
        } else if (input[index] == 'a') {
            textoCriptografado[index] = 'ai';
        }else if (input[index] == 'o') {
            textoCriptografado[index] = 'ober';
        }else if (input[index] == 'u') {
            textoCriptografado[index] = 'ufat';
        } else{
            textoCriptografado[index] = input[index];
        }
    }

    mostrarNaTela(textoCriptografado.join(''));

}

function visibilidadeDosElementos() {
    document.getElementById("buttonCopiar").style.visibility = "visible";
}

function mostrarNaTela(texto) {
    let textoAtual = document.getElementById("divSemTextoCriptografado");
    textoAtual.innerHTML = texto;
    
}

function copiar(){
    let conteudo = document.getElementById("divSemTextoCriptografado").innerText;
    navigator.clipboard.writeText(conteudo).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error('Falha ao copiar:', err);
    });
}