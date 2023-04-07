import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { accionPagina } from '../../redux/personajeSlice';

/**
 * Componente que contiene los botones para paginar
 * 
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const pagina = useAppSelector(state => state.personaje.pagina)

    const clickSiguiente = () => {
        dispatch(accionPagina(1))
    }

    const clickAnterior = () => {
        dispatch(accionPagina(-1))
    }

    return <div className="paginacion">
        <button disabled={pagina === 1} className={"primary"} onClick={clickAnterior}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={clickSiguiente}>Siguiente</button>
    </div>
}

export default Paginacion;