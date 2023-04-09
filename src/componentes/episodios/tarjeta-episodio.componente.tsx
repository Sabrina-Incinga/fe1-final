import { useQuery } from 'react-query';
import './tarjeta-episodio.css';
import { getEpisodio } from '../../services/personaje.service';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * @param {props} espisodioUrl url del episodio
 * 
 * @returns {JSX.Element} un JSX element 
 */

interface props{
    episodioUrl:string
}

const TarjetaEpisodio = ({episodioUrl}:props): JSX.Element => {
    const {data} = useQuery(['getEpisodio', episodioUrl], () => getEpisodio(episodioUrl));

    return <div className="tarjeta-episodio">
            <h4>{data?.name}</h4>
            <div>
                <span>{data?.episode}</span>
                <span>Lanzado el: {data?.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;