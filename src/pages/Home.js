import logo from '../components/logo.png'

export default function Home(){
    return(
        
        <div className="container containerConteudo">
            <div className="row">
                <h1>Homepage</h1>
            </div>

            <div className="row align-items-center justify-content-center corpoApresentacao">

                <div className="col-lg-6 order-last order-lg-first my-3">   
                    <h2>
                        
                        <span className="spanTextoHome">
                            Prazer, sou Carlos Nunes. 
                        </span>
                        <span className="spanTexto spanProfissao">
                            Desenvolvedor Front-end.
                        </span>    
                        
                    </h2>
                </div>
                
                <div className="col-md-4 fotoHome order-first order-lg-first my-3">
                    <img className='logo App-logo' src={logo} alt="placeholder"/>
                </div>

            </div>
        </div>
        
    )
}

 