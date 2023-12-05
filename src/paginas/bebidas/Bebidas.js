import "./bebidas.css"
import "../../componentes/postagembebidas/Postbeb"
import Postagembeb from "../../componentes/postagembebidas/Postbeb"
import Topo from "../../componentes/topo/Topo"

export default function Bebidas(){
    return(
        
        <><Topo /><>
            <div className="appBebida">
                <Postagembeb />
            </div>
        </></>
    )
}