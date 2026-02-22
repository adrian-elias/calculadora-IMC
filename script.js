function calcularImc() {

    // Entrada de  Dados
    let peso = document.getElementById("quilos").value;
    let altura = document.getElementById("metros").value;

    // Processamento
    let imc = peso / (altura * altura);
    let classe;
    
    if (imc < 18.5) {
        classe = "Peso Baixo.";
    } else if (imc < 24.99) {
        classe = "Peso Ideal.";
    } else if (imc < 29.99) {
        classe = "Sobrepeso.";
    } else {
        classe = "Obesidade.";
    }

    // Saída
    document.getElementById("resultado").textContent = "O valor do seu IMC é: " + imc.toFixed(1);
    document.getElementById("classificacao").textContent = "A classificação do seu IMC é: " + classe;

}