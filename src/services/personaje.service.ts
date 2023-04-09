import { response } from "../types/apiResponse.types";
import { episodio } from "../types/personaje.types";


/**
 * 
 * @param {number} pagina número de página
 * @returns {response} un objeto que contiene un array de personajes y los datos de las páginas siguiente y anterior
 */
export const getPersonajes = async (pagina:number): Promise<response> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await response.json();

    return data;
}

/**
 * 
 * @param {number} pagina número de página
 * @param {string} nombre nombre del personaje a buscar
 * @returns {response} un objeto que contiene un array de personajes coincidentes con el nombre buscado y los datos de las páginas siguiente y anterior
 */
export const getPersonajesPorNombre = async (pagina:number, nombre:string):Promise<response> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}`);
    const data = await response.json();

    return data;
}

/**
 * 
 * @param {number} id el id del episodio a buscar
 * @returns {episodio} los datos del episodio bucado
 */
export const getEpisodio = async (url:string):Promise<episodio> => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

