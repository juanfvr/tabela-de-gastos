import { addGasto, userGastos } from './storage.js';
import { atualizarTabela } from './components/table.js';

const inputNome = document.querySelector("#input-nome");
const inputLink = document.querySelector("#input-link");
const inputData = document.querySelector("#input-data");
const inputValor = document.querySelector("#input-valor");

const enviarGastos = () => {
    addGasto(inputNome.value, inputLink.value, inputData.value, inputValor.value);
    atualizarTabela();
}

document.querySelector("#btn-enviar").addEventListener("click", (event) => {
    event.preventDefault(); 
    enviarGastos();
    console.log(userGastos)
})

atualizarTabela();
console.log('form.js: ok')
