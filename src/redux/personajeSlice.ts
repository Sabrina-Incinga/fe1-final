import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { personaje } from "../types/personaje.types"
import { getPersonajes, getPersonajesPorNombre } from "../services/personaje.service"

export const fetchPersonajes = createAsyncThunk(
    "/fetchPersonajes",
    async (page: number) => {
      const response = await getPersonajes(page)
      return response
    }
)

export const fetchPersonajesPorNombre = createAsyncThunk(
  "/fetchPersonajesPorNombre",
  async ({ nombre, page }: { nombre: string, page: number }) => {
    const response = await getPersonajesPorNombre(page, nombre)
    return response
  }
)


interface InitialType{
    busqueda: string
    personajes: personaje[]
    favoritos: personaje[]
    pagina: number
    error: string | undefined
    personajeSeleccionado: personaje
}

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
        created: ''
      
}
}

export const personajeSlice = createSlice({
    name: 'personaje',
    initialState,
    reducers:{
      accionBusqueda: (state, action) => {
        state.busqueda = action.payload
      },
      accionFavoritos: (state, action) => {
        if(state.favoritos.find(f => f.id === action.payload.id)){
          state.favoritos = state.favoritos.filter(f => f.id!== action.payload.id)
        } else state.favoritos.push(action.payload)
      },
      accionSeleccionado: (state, action) => {
        state.personajeSeleccionado = action.payload
      },
      accionPagina: (state, action) => {
        state.pagina += action.payload
      }
    },
    extraReducers: builder => {
      builder.addCase(fetchPersonajes.fulfilled, (state, action) => {
        state.personajes = action.payload
        state.error = ""
      })
      builder.addCase(fetchPersonajes.rejected, (state, action) => {
        state.error = action.error.message
      })
      builder.addCase(fetchPersonajesPorNombre.fulfilled, (state, action) => {
        state.personajes = action.payload
        state.error = ""
      })
      builder.addCase(fetchPersonajesPorNombre.rejected, (state, action) => {
        state.error = action.error.message
      })
    }
})

export const { accionBusqueda, accionFavoritos, accionSeleccionado, accionPagina } = personajeSlice.actions

export default personajeSlice.reducer