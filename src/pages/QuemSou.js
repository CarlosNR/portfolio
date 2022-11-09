import placeholder from '../components/placeholder.jpg'

export default function QuemSou(){
    return(
        <div className="container">

            <div className="row">
                <h1>Quem sou</h1>
            </div>
            
            <div className="row align-items-center justify-content-center">

                <div className="col-lg-8 align-items-center order-last order-lg-first">   
                    <h2>
                        <span className="spanTexto">
                            
                            Meu nome é Carlos Nunes Ramos, graduado em Sistemas de informação (2019) e Mestre em engenharia de computação (2022). Tenho interesse em desenvolvimento de sistemas web e estou migrando do php e mysql para as tecnologias front-end.
                            
                        </span>
                    </h2>
                </div>

                <div className="d-flex align-items-center justify-content-center col-md-4 fotoHome order-first order-lg-first">
                    <img src={placeholder} alt="placeholder"/>

                </div>   

            </div>    

        </div>
        
    )
}

 