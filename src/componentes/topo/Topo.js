import "./topo.css"
import { Link } from "react-router-dom"
import FotoLogo from "../../imagens/logo.png"
import {BiArrowBack} from "react-icons/bi"
import {BiDrink} from "react-icons/bi"
import {MdLunchDining} from "react-icons/md"


export default function BarraTopo() {
    return (
        <>
            <div className="Topo">

                <div className="topoEsquerda"></div>

                <div className="topoCentro">
                    <ul className="topoLista">

                        <Link to="/">
                            <li className="topoListaItem"><BiArrowBack/></li>
                        </Link>

                        <Link to="/bebidas">
                            <li className="topoListaItem"><BiDrink/></li>
                        </Link>
                        <Link to="/comidas">
                            <li className="topoListaItem"><MdLunchDining/></li>
                        </Link>
                        <li className="topoListaItem"></li>
                    </ul>
                </div>

                <div className="topoDireita">
                    { <img className="topImg" src={FotoLogo} /> }
                </div>

            </div>
        </>
    )
}