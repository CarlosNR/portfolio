import placeholder from '../components/emConstrucao.png'
import OverlayTop from '../components/OverlayTop.js'
import OverlayBottom from '../components/OverlayBottom.js'
import {Container, Row, Col} from 'react-bootstrap'

export default function Projetos(){
    return(
        <Container className="containerProjetos">
            <Row>
                <h1>Projetos</h1>
            </Row>
            <h2 style={{marginBottom: "0"}}>
                <Row className="my-2">
                    <Col className="mx-1">

                        <OverlayTop placeholder={placeholder} espacamento={"mx-3"}/>
                        <OverlayTop placeholder={placeholder} espacamento={""}/>
                        <OverlayTop placeholder={placeholder} espacamento={"mx-3"}/>

                        {/* <img className="mx-3 habilidades" src={placeholder} alt="placeholder"/>
                        <img className="habilidades" src={placeholder} alt="placeholder"/> */}

                    </Col>
                </Row>
                <div className="row mb-2">
                    <div className="col">
                        
                        <OverlayBottom placeholder={placeholder} espacamento={"mx-3"}/>
                        <OverlayTop placeholder={placeholder} espacamento={""}/>
                        <OverlayBottom placeholder={placeholder} espacamento={"mx-3"}/>

                    </div>
                </div>
            </h2>
        </Container>
    )
}

 