import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { accionBusqueda } from '../../redux/personajeSlice';
import './filtros.css';

/**
 * Componente para realizar la búsqueda por nombre
 * 
 * 
 * @returns un JSX element 
 */
const Filtros = () => {
    const dispatch = useAppDispatch();

    const cambio = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(accionBusqueda(e.target.value));
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={cambio}/>
    </div>
}

export default Filtros;