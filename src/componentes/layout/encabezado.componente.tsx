import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns {JSX.Element} Un JSX con el encabezado de la página
 */
const Encabezado = (): JSX.Element => {

    return <header>
            <div>
                <div>
                    <h2>Examen Final de Frontend IV</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado