function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculo() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
}

function limpaDisplay() {
    document.getElementById('display').value = '';
}

function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso !== '' && altura !== '') {
        var alturaMetros = altura / 100;
        var imc = peso / (alturaMetros * alturaMetros);
        var resultado = '';

        if (imc < 18.5) {
            resultado = 'Abaixo do peso';
        } else if (imc < 25) {
            resultado = 'Peso normal';
        } else if (imc < 30) {
            resultado = 'Sobrepeso';
        } else {
            resultado = 'Obesidade';
        }

        document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + ' - ' + resultado;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todos os campos.';
    }
}

function generateJSON() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;


    var data = {
        name: name,
        email: email,
        telefone: telefone,
        senha: senha
    };

    var jsonData = JSON.stringify(data);
    document.getElementById("saida").innerText = JSON.stringify(data, null, 2);
}


