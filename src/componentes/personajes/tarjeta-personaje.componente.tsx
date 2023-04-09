import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { personaje } from '../../types/personaje.types';
import { useAppDispatch } from '../../hooks/hooks';
import { accionFavoritos, accionSeleccionado } from '../../redux/personajeSlice';
import { useNavigate } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @param {props} personaje - personaje para mostrar en la tarjeta
 * 
 * @returns {JSX.Element} un JSX de una tarjeta para mostrar un personaje 
 */

interface props{
    personaje: personaje
}

const TarjetaPersonaje = ({personaje}:props): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const marcarFavorito = () => {
        dispatch(accionFavoritos(personaje));
    }

    const detallePersonaje = () => {
        dispatch(accionSeleccionado(personaje));
        navigate("/detalle");
    }

    return <div className="tarjeta-personaje">
        <img src={personaje?.image} alt={`Foto de ${personaje?.name}`} onClick={detallePersonaje}/>
        <div className="tarjeta-personaje-body">
            <span onClick={detallePersonaje}>{personaje?.name}</span>
            <BotonFavorito esFavorito={personaje.esFavorito} onClick={marcarFavorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;