// Calcular la diferencia de año
export function obtenerDiferenciayear(year){
    return new Date().getFullYear() - year;
}

//calcula el total a pagar

export function calcularMarca (marca){
    let incremento;

    switch(marca){
        case 'americano':
            incremento = 1.15;
            break;

        case 'europeo':
            incremento =1.30;
            break;

        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;

    }

    return incremento;
}

//calcular tipo de seguro

export function obtenerPlan (plan){
    return(plan === 'basico') ? 1.20 : 1.50;
}

//muestra la primer letra mayus

export function obtenerLetraMayus(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}