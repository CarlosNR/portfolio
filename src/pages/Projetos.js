import { LoremIpsum } from "react-lorem-ipsum"
import placeholder from '../components/placeholder.jpg'

export default function Projetos(){
    return(
        <div className="container containerConteudo">
            <h1>Projetos</h1>
            <h2>
                <div className="row my-3">
                    <div className="col mx-1">

                        <img className="mx-3" src={placeholder} alt="placeholder"/>
                        <img src={placeholder} alt="placeholder"/>
                        <img className="mx-3" src={placeholder} alt="placeholder"/>

                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        
                        <img className="mx-3" src={placeholder} alt="placeholder"/>
                        <img src={placeholder} alt="placeholder"/>
                        <img className="mx-3" src={placeholder} alt="placeholder"/>

                    </div>
                </div>
            </h2>
        </div>
    )
}

 