import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { personaje } from '../../types/personaje.types';
import { useAppDispatch } from '../../hooks/hooks';
import { accionFavoritos } from '../../redux/personajeSlice';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @param {props} personaje - personaje para mostrar en la tarjeta
 * 
 * @returns un JSX element 
 */

interface props{
    personaje: personaje
}

const TarjetaPersonaje = ({personaje}:props) => {
    const dispatch = useAppDispatch()
    

    const marcarFavorito = () => {
        dispatch(accionFavoritos(personaje))
    }

    return <div className="tarjeta-personaje">
        <img src={personaje?.image} alt={`Foto de ${personaje?.name}`}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje?.name}</span>
            <BotonFavorito esFavorito={personaje.esFavorito} onClick={marcarFavorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;