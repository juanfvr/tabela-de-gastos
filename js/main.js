import { userGastos, addGasto } from './storage.js';
import { mostrarGastos } from './components/table.js';

export const enviarGastos = () => {
    const inputNome = document.querySelector("#input-nome").value;
    const inputLink = document.querySelector("#input-link").value;
    const inputData = document.querySelector("#input-data").value;
    const inputValor = document.querySelector("#input-valor").value;

    addGasto(inputNome, inputLink, inputData, inputValor)
}

document.querySelector("#btn-enviar").addEventListener("click", (event) => {
    event.preventDefault();
    enviarGastos();
    mostrarGastos();
    console.log(userGastos)
})

