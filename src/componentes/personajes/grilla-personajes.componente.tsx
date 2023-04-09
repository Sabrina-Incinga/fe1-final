import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { accionBusqueda, accionPagina, fetchPersonajes, fetchPersonajesPorNombre } from '../../redux/personajeSlice';
import { useLocation } from 'react-router-dom';
import { personaje } from '../../types/personaje.types';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * 
 * 
 * @returns {JSX.Element} un JSX con la grilla de tarjetas de tipo TarjetaPersonaje
 */
const GrillaPersonajes = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.personaje.personajes);
    const favoritos = useAppSelector(state => state.personaje.favoritos);
    const pagina = useAppSelector(state => state.personaje.pagina);
    const busqueda = useAppSelector(state => state.personaje.busqueda)

    /**
     * Función transforma un personaje en una tarjeta para renderizar
     * 
     * @param {personaje} personaje datos del personaje a mostrar 
     * @returns {JSX.Element} componente TarjetaPersonaje
     */
    const mapper = (personaje:personaje): JSX.Element => <TarjetaPersonaje personaje={personaje} key={personaje.id} />
    

    useEffect(() => {
        if(busqueda){
            dispatch(fetchPersonajesPorNombre({nombre:busqueda,pagina}))
        }else dispatch(fetchPersonajes(pagina))
        
    }, [pagina, dispatch, busqueda]);

    useEffect(() => {
        if(location.pathname !== '/'){
            dispatch(accionBusqueda(''));
            dispatch(accionPagina('reset'));
        }
    }, [location, dispatch]);

    return <div className="grilla-personajes">
        {location.pathname ==='/' ? personajes.map(mapper) : favoritos.map(mapper)}
    </div>
}
 
export default GrillaPersonajes;