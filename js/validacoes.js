export const validarNome = (nome) => {
    return nome === "";
}

export const validarLink = (link) => {
    const regexLink =  new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/);
        return regexLink.test(link);
}

export const validarData = (data) => {
    return data === "";
}

export const validarValor = (valor) => {
    return valor === "";
}
