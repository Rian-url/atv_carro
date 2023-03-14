// This is a JavaScript file

function Calc() {
const select = document.getElementById("marcas");
const opcaoMarcas = select.options[select.selectedIndex].value;
const modelo = document.getElementById("modelo").value
let distancia = document.getElementById("d1").value
let gas = document.getElementById("l1").value

let result = distancia/gas

const text = document.getElementById("content").innerHTML = 'Seu ' + ' ' + opcaoMarcas + ' ' + modelo + ' ' + 'fez' + ' ' + result + 'KM/L';
}

function MarcarTabela() {
   let distancia = document.getElementById("d1").value
   let gas = document.getElementById("l1").value
   let result = distancia/gas

  let first = document.getElementById('vl1')
  let second = document.getElementById('vl2')
  let third = document.getElementById('vl3')
  let fourth = document.getElementById('vl4')

   if( result >= 20) {
       first.style.background = "red"
   
   } else if ((result >= 12) && (result < 20)) {

  second.style.background = "red"

   }else if ((result >= 8) && (result < 12)) {

   third.style.background = "red"

   }else if (result < 8) {

   fourth.style.background = 'red';

   }
}
