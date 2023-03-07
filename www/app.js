// This is a JavaScript file

function Calc() {
const select = document.getElementById("marcas");
const opcaoMarcas = select.options[select.selectedIndex].value;
const modelo = document.getElementById("modelo").value
const distancia = document.getElementById("d1").value
const gas = document.getElementById("l1").value

const result = distancia/gas

const text = document.getElementById("content").innerHTML = 'Seu ' + ' ' + opcaoMarcas + ' ' + modelo + ' ' + 'fez' + ' ' + result + 'KM/L';
}

