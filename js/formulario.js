import { addGasto, userGastos } from './storage.js';
import { atualizarTabela } from './components/table.js';
import { validarNome, validarLink, validarData, validarValor } from './validacoes.js';
import { ModalErro } from './components/modal.js';

const inputNome = document.querySelector("#input-nome");
const inputLink = document.querySelector("#input-link");
const inputData = document.querySelector("#input-data");
const inputValor = document.querySelector("#input-valor");


const enviarGastos = () => {
    if(validarNome(inputNome.value)) {
        ModalErro('O nome é inválido');
        return;
    }
    if(!(validarLink(inputLink.value))) {
        ModalErro('O link é inválido');
        inputLink.value = ""
        return;
    }
    if(validarData(inputData.value)) {
        ModalErro('A data é inválida');
        return;
    }
    if(validarValor(inputValor.value)) {
        ModalErro('O valor é inválido');
        return;
    }
    addGasto(inputNome.value, inputLink.value, inputData.value, inputValor.value);
    inputNome.value = ""
    inputLink.value = ""
    inputData.value = ""
    inputValor.value = ""
    atualizarTabela();
}

document.querySelector("#btn-enviar").addEventListener("click", (event) => {
    event.preventDefault(); 
    enviarGastos()
    console.log(userGastos)
})

atualizarTabela();
console.log('form.js: ok')
