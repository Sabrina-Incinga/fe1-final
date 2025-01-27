import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { accionBusqueda } from '../../redux/personajeSlice';
import './filtros.css';

/**
 * Componente para realizar la búsqueda por nombre
 * 
 * 
 * @returns {JSX.Element} un JSX con filtros para buscar personajes por nombre 
 */
const Filtros = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const buscador = useAppSelector(state => state.personaje.busqueda)

    /**
     * Función que captura los cambios en el valor del input y los almacena en el store Personaje.Busqueda
     * 
     * @param {ChangeEvent<HTMLInputElement>} e evento de cambio en el input 
     */
    const cambio = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(accionBusqueda(e.target.value));
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={cambio} value={buscador}/>
    </div>
}

export default Filtros;