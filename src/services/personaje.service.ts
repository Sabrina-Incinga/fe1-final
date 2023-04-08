import { response } from "../types/apiResponse.types";

export const getPersonajes = async (pagina:number): Promise<response> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await response.json();

    return data;
}

export const getPersonajesPorNombre = async (pagina:number, nombre:string):Promise<response> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}`);
    const data = await response.json();

    return data;
}

