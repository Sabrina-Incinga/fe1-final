import { personaje } from "./personaje.types"

/**
 * @typedef {object} info
 * @property {number | null} count
 * @property {number | null} pages
 * @property {string | null} next
 * @property {string | null} prev
 */

/**
 * @typedef {object} response 
 * @property {info} info
 * @property {personaje[]} results
 */

export interface response{
    info: {
        count: number | null
        pages: number | null
        next: string | null
        prev: string | null
        }
    results: personaje[]
}