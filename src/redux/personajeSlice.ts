import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personaje } from "../types/personaje.types";
import { getPersonajes, getPersonajesPorNombre } from "../services/personaje.service";

export const fetchPersonajes = createAsyncThunk(
    "/fetchPersonajes",
    async (page: number) => {
      const response = await getPersonajes(page);
      return response;
    }
);

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