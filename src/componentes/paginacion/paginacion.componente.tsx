import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { accionPagina } from '../../redux/personajeSlice';

/**
 * Componente que contiene los botones para paginar
 * 
 * 
 * 
 * @returns {JSX.Element} un JSX element 
 */
const Paginacion = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const pagina = useAppSelector(state => state.personaje.pagina)
    const next = useAppSelector(state => state.personaje.siguiente)

    const clickSiguiente = () => {
        dispatch(accionPagina(1))
    }

    const clickAnterior = () => {
        dispatch(accionPagina(-1))
    }

    return <div className="paginacion">
        <button disabled={pagina === 1} className={"primary"} onClick={clickAnterior}>Anterior</button>
        <button disabled={next === null} className={"primary"} onClick={clickSiguiente}>Siguiente</button>
    </div>
}

export default Paginacion;