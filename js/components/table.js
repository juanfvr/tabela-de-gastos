import { userGastos } from '../storage.js';

export const atualizarTabela = () => {
    const table = document.querySelector('table');
    const tableBody = document.querySelector("#table-body");
    const tableFoot = document.querySelector("#table-foot")

    if (userGastos.length > 0) {
        table.classList.remove('opacity-25')
    }

    // erro exibição dos gastos na tabela
    tableBody.innerHTML = "";

    userGastos.map(item => {
        tableBody.innerHTML += 
        `<tr class="bg-white border-b overflow-x-hidden bg-zinc-950 dark:border-zinc-900/25 border-gray-200">
            <th scope="row" class="w-50% md:w-25% px-6 py-4 font-medium text-gray-900 dark:text-white">
            ${item.nome}
            </th>
            <td class="px-6 hidden md:table-cell py-4 underline">
                <a href="${item.link}" class="h-full" target="_blank">${isLinkNull(item.link)}</a>
            </td>
            <td class="px-6 place-self-start py-4 hidden sm:table-cell">
                ${item.data}
            </td>
            <td class="px-6 py-4">
                R$${item.valor}
            </td>
        </tr>`;
    });

    const valorTotal = userGastos
        .map(item => item.valor)
        .reduce((acumulador, valorInicial) => acumulador + valorInicial, 0)
    tableFoot.innerHTML = `Total: R$${Math.floor(valorTotal, 2)}`

    function isLinkNull(link) {
        if(link === "") {
            return ""
        } else {
            return "Abrir link"
        }
    } 
}

console.log('table.js: ok')