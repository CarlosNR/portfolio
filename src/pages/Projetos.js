import placeholder from '../components/imagens/emConstrucao.png'
import OverlayTop from '../components/OverlayTop.js'
import OverlayBottom from '../components/OverlayBottom.js'
import {Container, Row, Col} from 'react-bootstrap'

export default function Projetos(){
    
    return(
        <Container className="containerProjetos">
            <Row className="align-items-center justify-content-center">
                <h1>Projetos</h1>
            </Row>
            <h2 style={{marginBottom: "0"}}>
                <div>
                    <Row className="my-2 align-items-center justify-content-center">
                        <Col className="mx-1">

                                <OverlayTop placeholder={placeholder} espacamento={"mx-3"} mensagem="Em contrução..."/>
                                <OverlayTop placeholder={placeholder} espacamento={""} mensagem="Em contrução..."/>
                                <OverlayTop placeholder={placeholder} espacamento={"mx-3"} mensagem="Em contrução..."/>

                        </Col>
                    </Row>
                    <Row className="mb-2 align-items-center justify-content-center">
                        <Col>
                            
                            <OverlayBottom placeholder={placeholder} espacamento={"mx-3"} mensagem="Em contrução..."/>
                            <OverlayBottom placeholder={placeholder} espacamento={""} mensagem="Em contrução..." />
                            <OverlayBottom placeholder={placeholder} espacamento={"mx-3"} mensagem="Em contrução..."/>

                        </Col>
                    </Row>
                </div>
            </h2>
        </Container>
    )
}

 