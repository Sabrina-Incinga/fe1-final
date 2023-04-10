import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { accionFavoritos } from "../redux/personajeSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns {JSX.Element} la pagina de detalle
 */
const PaginaDetalle = (): JSX.Element => {
    const personaje = useAppSelector(state => state.personaje.personajeSeleccionado);
    const dispatch = useAppDispatch();

    /**
     * Función que maneja el cambio de estado del estado favorito de un personaje a través de dispatch
     */
    const marcarFavorito = () => {
        dispatch(accionFavoritos (personaje));
    }

    return <div className="container">
        <h3>Rick Sanchez</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje?.image} alt={`Foto de ${personaje?.name}`}/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje?.name}</p>
                    <p>Planeta: {personaje?.location.name}</p>
                    <p>Genero: Male</p>
                </div>
                <BotonFavorito esFavorito={personaje.esFavorito} onClick={marcarFavorito} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {personaje.episode.map((ep: string, index:number) => <TarjetaEpisodio key={index} episodioUrl={ep}/>)}
        </div>
    </div>
}

export default PaginaDetalle