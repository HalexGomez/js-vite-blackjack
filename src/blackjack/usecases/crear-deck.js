import _ from "underscore";

/**
 * 
 * @param {array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<String>} tipoEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tipoEspeciales) => {
    
    if (!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error("tiposDeCarta es obligatorio como arreglo de string");
    if (!tipoEspeciales || tipoEspeciales.length === 0  ) throw new Error("tipoEspeciales es obligatorio como arreglo de string");

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;