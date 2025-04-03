/**
 * 
 * @param {String} carta Se necesita una carta para conocer su valor 
 * @returns {Number} Se regresa el valor
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}