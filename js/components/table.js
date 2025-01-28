import { userGastos } from '../storage.js';

export const isLenghtZero = () => {
    if (userGastos.length === 0) {
        const table = document.querySelector('table');
        table.classList.add('opacity-25', 'select-none')
    } else {
        const rowExample = document.querySelector('#row-example');
        rowExample.classList.add('hidden')
    }
}


// erro exibição dos gastos na tabela
export const mostrarGastos = () => {
    const tableBody = document.querySelector("#table-body");
    userGastos.map(item => 
        tableBody.innerHTML += `
            <tr id="row-example" class="bg-white border-b overflow-x-hidden dark:bg-zinc-900 dark:border-zinc-800 border-gray-200">
                <th scope="row"
                    class="w-10 px-6 py-4 font-medium text-gray-900 dark:text-white">
                    ${item.nome}
                </th>
                <td class=" px-6 hidden md:block py-4 underline">
                    <a href="#">${item.link}</a>
                </td>
                <td class="px-6 py-4">${item.data}</td>
                <td class="px-6 py-4">R$${item.valor}</td>
            </tr>
        `
    )
}

mostrarGastos();
isLenghtZero();
