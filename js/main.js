import { userGastos } from './storage.js';

const isLenghtZero = () => {
    if(userGastos.length === 0) {
        const table = document.querySelector('table');
        table.classList.add('opacity-25', 'select-none')
    }
}

isLenghtZero();