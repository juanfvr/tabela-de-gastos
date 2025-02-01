export let userGastos = JSON.parse(localStorage.getItem('gastos')) || [];

export const addGasto = (nome, link, data, valor) => {
    const novoGasto = {
        nome: nome,
        link: link,
        data: data,
        valor: valor
    };

    userGastos.push(novoGasto);
    localStorage.setItem('gastos', JSON.stringify(userGastos));
};

localStorage.clear();
console.log('storage.js: ok');