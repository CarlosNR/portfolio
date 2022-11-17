import eu from '../components/imagens/eu3x4.jpeg'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function QuemSou(){
    const current = new Date()
    const nasci = new Date('November 24, 1994')

    var age = current.getFullYear() - nasci.getFullYear()
    var m = current.getMonth() - nasci.getMonth()

    if (m < 0 || (m === 0 && current.getDate() < nasci.getDate())) {
        age--
    }

    return(

        <Container className="containerConteudo">

            <Row className="align-items-center justify-content-center">
                <h1>Quem sou</h1>
            </Row>
            
            <Row className="align-items-center justify-content-center">

                <Col className="col-lg-8 col-12 order-last order-lg-first">   
                    <h2>
                        <span className="spanTexto" style={{fontSize: "calc(18px + (26 - 18) * ((100vw - 300px) / (1600 - 300)))"}}>
                            
                            Meu nome é Carlos Nunes Ramos, tenho {age} anos, sou Bacharel em Sistemas de Informação (2019) e Mestre em Engenharia de Computação (2022). Tenho interesse em desenvolvimento de sistemas web e estou migrando do Php e MySql para as tecnologias front-end.<br/><br/>

                            Mais recentemente tenho me envolvido com as tecnologias: Html5, Css3, Javascript, Php8, PostgreSql e React.<br/><br/>

                            Porém tenho noções em: Python, Netlogo e MySql.
                            
                        </span>
                    </h2>
                </Col>

                <Col className="d-flex align-items-center justify-content-center col-lg-4 col-12 fotoHome order-first order-lg-last">
                    <Image className='eu img-thumbnail' src={eu} alt="placeholder"/>
                </Col>   

            </Row>    

        </Container>
        
    )
}

 