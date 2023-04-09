import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { fetchPersonajes, fetchPersonajesPorNombre } from '../../redux/personajeSlice';
import { useLocation } from 'react-router-dom';
import { personaje } from '../../types/personaje.types';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * 
 * 
 * @returns {JSX.Element} un JSX element 
 */
const GrillaPersonajes = (): JSX.Element => {
    let location = useLocation();
    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.personaje.personajes);
    const favoritos = useAppSelector(state => state.personaje.favoritos);
    const pagina = useAppSelector(state => state.personaje.pagina);
    const busqueda = useAppSelector(state => state.personaje.busqueda)


    const mapper = (pers:personaje) => <TarjetaPersonaje personaje={pers} key={pers.id} />
    

    useEffect(() => {
        if(busqueda){
            dispatch(fetchPersonajesPorNombre({nombre:busqueda,pagina}))
        }else dispatch(fetchPersonajes(pagina))
        
    }, [pagina, dispatch, busqueda]);

    return <div className="grilla-personajes">
        {location.pathname ==='/' ? personajes.map(mapper) : favoritos.map(mapper)}
    </div>
}
 
export default GrillaPersonajes;