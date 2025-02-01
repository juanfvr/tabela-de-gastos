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
        `<tr class="overflow-x-hidden border-b border-gray-600 bg-zinc-900 ">
            <th scope="row" class="p-4 font-medium">
                ${item.nome}
            </th>
            <td class="hidden md:table-cell p-4 underline">
                <a href="${item.link}" class="h-full" target="_blank">${isLinkNull(item.link)}</a>
            </td>
            <td class="hidden sm:table-cell p-4">
                ${item.data}
            </td>
            <td class="p-4">
                R$${item.valor}
            </td>
        </tr>`;
    });

    const valorTotal = userGastos
        .map(item => Number(item.valor))
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