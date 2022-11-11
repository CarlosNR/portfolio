import placeholder from '../components/placeholder.jpg'

export default function Home(){
    return(
        
        <div className="container containerConteudo">
            <div className="row">
                <h1>Homepage</h1>
            </div>

            <div className="row align-items-center justify-content-center corpoApresentacao">

                <div className="col-lg-6 align-items-center order-last order-lg-first my-3">   
                    <h3>
                        <span className="spanTexto">
                            Prazer, sou Carlos Nunes. 
                        </span>
                        <span className="spanTexto spanProfissao">
                            Desenvolvedor Front-end.
                        </span>
                        
                        
                    </h3>
                </div>
                
                <div className="d-flex align-items-center justify-content-center col-md-4 fotoHome order-first order-lg-first my-3">
                    <img src={placeholder} alt="placeholder"/>
                </div>

            </div>
        </div>
        
    )
}

 