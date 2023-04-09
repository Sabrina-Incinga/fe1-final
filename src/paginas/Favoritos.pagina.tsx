import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Vista de todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {JSX.Element} la pagina de favoritos
 */
const PaginaFavoritos = (): JSX.Element => {
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos