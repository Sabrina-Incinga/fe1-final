import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { fetchPersonajes } from '../../redux/personajeSlice';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const dispatch = useAppDispatch()
    const personajes = useAppSelector(state => state.personaje.personajes)
    const pagina = useAppSelector(state => state.personaje.pagina)

    useEffect(() => {
        dispatch(fetchPersonajes(pagina))
        
    }, [pagina, dispatch])

    return <div className="grilla-personajes">
        {personajes.map(pers => <TarjetaPersonaje personaje={pers} key={pers.id} />)}
    </div>
}
 
export default GrillaPersonajes;