import "./comidas.css"
import "../../componentes/areaPostagem/AreaPostagem"
import AreaPostagem from "../../componentes/areaPostagem/AreaPostagem"
import Topo from "../../componentes/topo/Topo"
export default function Comidas(){
    return(
        
        <><Topo /><>
            <div className="appComida">
                <AreaPostagem />
            </div>
        </></>
    )
}