import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../hooks/hooks";
import { accionBusqueda, accionPagina } from "../redux/personajeSlice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns {JSX.Element} la pagina de inicio
 */
const PaginaInicio = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const resetearBuscador = () => {
        dispatch(accionBusqueda(''));
        dispatch(accionPagina('reset'));
    }


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button type="button" className="danger" onClick={resetearBuscador}>Resetear buscador</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio