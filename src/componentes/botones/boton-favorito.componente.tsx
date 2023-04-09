import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {props} - objeto de dos atributos: esFavorito, boolean que indica si el personaje es marcado como favorito o no, y onClick, función para manejar el cambio de esFavorito
 * 
 * @returns un JSX element 
 */
interface props{
    esFavorito: boolean
    onClick: () => void
}

const BotonFavorito = ({esFavorito, onClick}:props): JSX.Element => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick}/>
    </div>
}

export default BotonFavorito;