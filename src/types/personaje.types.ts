/**
 * @typedef {object} data 
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef {object} personaje
 * @property {number} id
 * @property {string} name
 * @property {string} status
 * @property {string} species
 * @property {string} type
 * @property {string} gender
 * @property {data} origin
 * @property {data} location
 * @property {string} image
 * @property {string[]} episode
 * @property {string} url
 * @property {string} created
 * @property {boolean} esFavorito
 */

export interface personaje{
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
          name: string,
          url: string
        },
        location: {
          name: string,
          url: string
        },
        image: string,
        episode: string[],
        url: string,
        created: string,
        esFavorito: boolean
}

/**
 * @typedef {object} episodio
 * @property {number} id
 * @property {string} name
 * @property {string} air_date
 * @property {string} episode
 * @property {string[]} characters
 * @property {string} url
 * @property {string} created
 */
export interface episodio{
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

