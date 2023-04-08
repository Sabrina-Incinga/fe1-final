import { personaje } from "./personaje.types"

export interface response{
    info: {
        count: number | null
        pages: number | null
        next: string | null
        prev: string | null
        }
    results: personaje[]
}