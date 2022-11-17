import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Footer(){
    return(

        <Container className='border-top'>
            <Row className='my-3 align-items-center justify-content-center'>
                
                <Col className='col-6 align-items-center'>
                    <span className={styles.email}>email: si.carlos@gmail.com</span>
                </Col>

              
                <Col className='col-6 align-items-center'>
                
                    <ul className={styles.listaFooter}>
                        <li>
                            {/* <svg/> */}
                            <a href="https://www.facebook.com/carlos.nunesramos" target="_blank" rel="noreferrer"><FaFacebook/></a>
                        </li>
                        <li>
                            <a href="https://github.com/CarlosNR/" target="_blank" rel="noreferrer"><FaGithub/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/carlosnunesramos/" target="_blank" rel="noreferrer"><FaLinkedin/></a>  
                        </li>
                    </ul>

                </Col>
            </Row>
        </Container>

    )
}

 