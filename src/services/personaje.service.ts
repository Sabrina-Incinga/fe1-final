import { personaje } from "../types/personaje.types";

export const getPersonajes = async (pagina:number): Promise<personaje[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await response.json();

    return data.results;
}

export const getPersonajesPorNombre = async (pagina:number, nombre:string):Promise<personaje[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}`);
    const data = await response.json();

    return data.results;
}

