import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * 
 * 
 * @returns un JSX element 
 */
interface props{
    esFavorito: boolean
    onClick: () => void
}

const BotonFavorito = ({esFavorito, onClick}:props) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick}/>
    </div>
}

export default BotonFavorito;