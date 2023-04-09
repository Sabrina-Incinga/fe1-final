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

export interface episodio{
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

