
function calcularClassico() {
    let oferta = document.getElementById("inputNumber").value;
    const taxaEnjoei = 12;
    let tarifaFixa;
    if(oferta <= 15) {
        tarifaFixa = 1.75;
    } else if (tarifaFixa <= 30){
        tarifaFixa = 3.75;
    } else if (oferta <= 50){
        tarifaFixa = 4.25;
    } else if (oferta <= 70) {
        tarifaFixa = 5.25;
    } else if (oferta <= 100){
        tarifaFixa = 6.25;
    } else if (oferta <= 150){
        tarifaFixa = 7.25;
    } else if (oferta <= 300){
        tarifaFixa = 13.75;
    } else if (oferta <= 500){
        tarifaFixa = 22.50;
    } else {
        tarifaFixa = 25.00;
    }


    // oferta
    // valor da oferta - taxas total
    let taxas = ((oferta * taxaEnjoei) / 100 + tarifaFixa);
    let total = oferta - taxas;
    const turbinado = "Modo Turbinado: "
    const classico = "Modo Clássico: "
    
    // exibir na tela do usuario
    let exibirTela = document.getElementById('total');
    exibirTela.innerText = 'Valor total a receber: ' + total + 'R$';
    let exibirTaxa = document.getElementById('taxas');
    exibirTaxa.innerText = 'Está sendo descontado uma taxa de: ' + taxas + 'R$';
}