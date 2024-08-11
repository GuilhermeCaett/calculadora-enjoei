
      function calcular() {
        let oferta = document.getElementById("inputNumber").value;
        const taxaEnjoei = 18;
        let tarifaFixa;
        if(oferta <= 15) {
            tarifaFixa = 3.50;
        } else if (tarifaFixa <= 30){
            tarifaFixa = 7.50;
        } else if (oferta <= 50){
            tarifaFixa = 8.50;
        } else if (oferta <= 70) {
            tarifaFixa = 10.50;
        } else if (oferta <= 100){
            tarifaFixa = 12.50;
        } else if (oferta <= 150){
            tarifaFixa = 16.50;
        } else if (oferta <= 300){
            tarifaFixa = 27.50;
        } else if (oferta <= 500){
            tarifaFixa = 45.00;
        } else {
            tarifaFixa = 50.00;
        }

        // oferta
        // valor da oferta - taxas total
        let taxas = ((oferta * taxaEnjoei) / 100 + tarifaFixa);
        let total = oferta - taxas;
        
        // exibir na tela do usuario
        let exibirTela = document.getElementById('total');
        exibirTela.innerText = 'Valor total a receber: ' + total + 'R$';
        let exibirTaxa = document.getElementById('taxas');
        exibirTaxa.innerText = 'Está sendo descontado uma taxa de: ' + taxas + 'R$';
    }