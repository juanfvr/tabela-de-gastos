export const userGastos = [
    {nome: "a", link: "hdasd", data: "01/02/2014", valor: 1000},
    {nome: "b", link: "bbbbb", data: "01/02/2014", valor: 2000}
];

export const addGasto = (nome, link, data, valor) => {
    userGastos.push(
        {nome: nome, link: link, data: data, valor: valor}
    )
}

console.log(userGastos)