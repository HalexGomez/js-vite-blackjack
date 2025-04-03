/**
 * 
 * @param {Array<String>} deck Se obtiene del metodo crearDeck
 * @returns {String} Regresa una carta
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) throw 'No hay cartas en el deck';
    
    const carta = deck.pop();
    return carta;
}