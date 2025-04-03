/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de la carta
 */
export const crearCarta = (carta) => {

    if (!carta) throw new Error("la carta es requerida");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}