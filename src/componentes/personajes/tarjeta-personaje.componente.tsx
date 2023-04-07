import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { personaje } from '../../types/personaje.types';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface props{
    personaje: personaje
}

const TarjetaPersonaje = ({personaje}:props) => {

    return <div className="tarjeta-personaje">
        <img src={personaje?.image} alt={`Foto de ${personaje?.name}`}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje?.name}</span>
            <BotonFavorito esFavorito={false} onClick={()=>{}}/>
        </div>
    </div>
}

export default TarjetaPersonaje;