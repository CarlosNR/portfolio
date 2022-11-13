import logo from '../components/imagens/logo2.png'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


export default function Home(){
    return(
        
        <Container className="containerConteudo corpoApresentacao">
            
            <Row className="align-items-center justify-content-center">
                <h1>Homepage</h1>
            </Row>

            <Row className="align-items-center justify-content-center">

                <Col className="col-lg-6 my-3">   
                    <h2>
                        
                        <span className="spanTextoHome">
                            Prazer, sou Carlos Nunes. 
                        </span>
                        <span className="spanTexto spanProfissao">
                            Desenvolvedor Front-end.
                        </span>    
                        
                    </h2>
                </Col>
                
                <Col className="col-md-4 fotoHome my-3">
                    <Image className='logo App-logo' src={logo} alt="placeholder"/>
                </Col>

            </Row>
        </Container>
        
    )
}

 