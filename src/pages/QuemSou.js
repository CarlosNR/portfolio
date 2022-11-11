import placeholder from '../components/placeholder.jpg'


export default function QuemSou(){
    const current = new Date();
    const nasci = new Date('November 24, 1994');

    var age = current.getFullYear() - nasci.getFullYear();
    var m = current.getMonth() - nasci.getMonth();

    if (m < 0 || (m === 0 && current.getDate() < nasci.getDate())) {
        age--;
    }

    return(

        <div className="container containerConteudo">

            <div className="row">
                <h1>Quem sou</h1>
            </div>
            
            <div className="row align-items-center justify-content-center">

                <div className="col-lg-8 align-items-center order-last order-lg-first">   
                    <h2>
                        <span className="spanTexto">
                            
                            Meu nome é Carlos Nunes Ramos, tenho {age} anos, sou Bacharel em Sistemas de Informação (2019) e Mestre em Engenharia de Computação (2022). Tenho interesse em desenvolvimento de sistemas web e estou migrando do Php e MySql para as tecnologias front-end.<br/><br/>

                            Mais recentemente tenho me envolvido com as tecnologias: Html5, Css3, Javascript, Php8, PostgreSql e React.<br/><br/>

                            Porém tenho noções em: Python, Netlogo, MySql.
                            
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

 