import placeholder from '../components/emConstrucao.png'

export default function Projetos(){
    return(
        <div className="container containerProjetos">
            <div className="row">
                <h1>Projetos</h1>
            </div>
            <h2 style={{marginBottom: "0"}}>
                <div className="row my-2">
                    <div className="col mx-1">

                        <img className="mx-3 habilidades" src={placeholder} alt="placeholder"/>
                        <img className="habilidades" src={placeholder} alt="placeholder"/>
                        <img className="mx-3 habilidades" src={placeholder} alt="placeholder"/>

                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        
                        <img className="mx-3 habilidades" src={placeholder} alt="placeholder"/>
                        <img className="habilidades" src={placeholder} alt="placeholder"/>
                        <img className="mx-3 habilidades" src={placeholder} alt="placeholder"/>

                    </div>
                </div>
            </h2>
        </div>
    )
}

 