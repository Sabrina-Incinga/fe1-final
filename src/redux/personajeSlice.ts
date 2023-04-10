import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personaje } from "../types/personaje.types";
import { getPersonajes, getPersonajesPorNombre } from "../services/personaje.service";

/**
 * Thunk que maneja el llamado a la api para obtener los personajes paginados
 */
export const fetchPersonajes = createAsyncThunk(
    "/fetchPersonajes",
    async (page: number) => {
      const response = await getPersonajes(page);
      return response;
    }
);

/**
 * Thunk que maneja el llamado a la api para obtener los personajes paginados fitrados por nombre
 */
export const fetchPersonajesPorNombre = createAsyncThunk(
  "/fetchPersonajesPorNombre",
  async ({ nombre, pagina }: { nombre: string, pagina: number }) => {
    const response = await getPersonajesPorNombre(pagina, nombre);
    return response;
  }
);


interface InitialType{
    busqueda: string
    personajes: personaje[]
    favoritos: personaje[]
    pagina: number
    error: string | undefined
    personajeSeleccionado: personaje
    siguiente: string | null
};

/**
 * @typedef {object} state - estado almacenado en store
 * @property {string} busqueda - parámetro para realizar la búsqueda por nombre
 * @property {personaje[]} personajes - array que contiene los personajes que devuelve la api
 * @property {personaje[]} favoritos - array que contiene los personajes marcados como favoritos
 * @property {number} pagina - número de página consultada a la api
 * @property {string | undefined} error - captura del error en caso de fallo de la api
 * @property {personaje} personajeSeleccionado - personaje seleccionado para visualizar en la página de detalles
 * @property {string | null} siguiente - captura el string de la url de la página siguiente 
 */
const initialState : InitialType = {
    busqueda: '',
    personajes: [],
    favoritos: [],
    pagina: 1,
    error: "",
    personajeSeleccionado: {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
          name: '',
          url: ''
        },
        location: {
          name: '',
          url: ''
        },
        image: '',
        episode: [],
        url: '',
        created: '',
        esFavorito: false
    },
    siguiente: null
};

export const personajeSlice = createSlice({
    name: 'personaje',
    initialState,
    reducers:{
      accionBusqueda: (state, action) => {
        state.busqueda = action.payload;
      },
      accionFavoritos: (state, action) => {
        const id = action.payload.id;
        const esFavorito = action.payload.esFavorito;
        const personajes = state.personajes;
        const personaje = personajes.find((f) => f.id === id);

        if (personaje) {
          personaje.esFavorito = !personaje.esFavorito;
        }

        if (id === state.personajeSeleccionado.id) {
          state.personajeSeleccionado.esFavorito = !state.personajeSeleccionado.esFavorito;
        }

        if (esFavorito) {
          state.favoritos = state.favoritos.filter((f) => f.id !== id);
        } else if (personaje) {
          state.favoritos.push(personaje);
        }
      },
      accionSeleccionado: (state, action) => {
        state.personajeSeleccionado = action.payload;
      },
      accionPagina: (state, action) => {
        action.payload === 'reset' ? state.pagina = 1 :state.pagina += action.payload;
      }
    },
    extraReducers: builder => {
      builder.addCase(fetchPersonajes.fulfilled, (state, action) => {
        const personajes = action.payload.results.map(pers =>{
          const esFavorito = state.favoritos.some(persona => persona.id === pers.id);
          pers.esFavorito = esFavorito;
          return pers;
        });
        state.siguiente = action.payload.info.next;
        state.personajes = personajes;
        state.error = "";
      })
      builder.addCase(fetchPersonajes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      builder.addCase(fetchPersonajesPorNombre.fulfilled, (state, action) => {
        const personajes = action.payload.results.map(pers =>{
          const esFavorito = state.favoritos.some(persona => persona.id === pers.id);
          pers.esFavorito = esFavorito;
          return pers;
        });
        state.siguiente = action.payload.info.next;
        state.personajes = personajes;
        state.error = "";
      })
      builder.addCase(fetchPersonajesPorNombre.rejected, (state, action) => {
        state.error = action.error.message;
      })
    }
})

export const { accionBusqueda, accionFavoritos, accionSeleccionado, accionPagina } = personajeSlice.actions;

export default personajeSlice.reducer;