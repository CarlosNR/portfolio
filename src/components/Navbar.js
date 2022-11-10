import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Button, Container, Offcanvas} from 'react-bootstrap'  
import {useState} from 'react'  
import icone from './navbarVerde.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ColorSchemesExample() {
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  return (
    <>
      <Navbar className={styles.navBarDesk} expand="lg">
        <Container>
          <Navbar.Brand>            
            <Link  to="/">
              <img className={styles.icone} src={icone} alt="Navbar"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
             
              <Link to="/">
                <Button variant="outline-success" className={styles.navButton}>
                  Home
                </Button>
              </Link>

              <Link to="/quem">
                <Button variant="outline-success" className={styles.navButton}>
                  Quem sou
                </Button>
              </Link>

              <Link to="/projetos">
                <Button variant="outline-success" className={styles.navButton}>
                  Projetos
                </Button>
              </Link>

              <Link to="/contato">
                <Button variant="outline-success" className={styles.navButton}>
                  Contato
                </Button>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className={styles.navBarMob} expand="lg">
        <Container>

          <Navbar.Brand>            
            <Link  to="/">
              <img className={styles.icone} src={icone} alt="Navbar"/>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle onClick={showSidebar} className="ms-auto"/>

          <Container>  

            <Offcanvas show={show} onHide={closeSidebar}>  

              <Offcanvas.Header className={styles.offCanvasHead} closeButton>  
                <Offcanvas.Title className={styles.canvasMenu}>Menu</Offcanvas.Title>  
              </Offcanvas.Header>  
              
              <Offcanvas.Body className={styles.offCanvasBody}>  

                {/* Colocar o button DENTRO do link, se não o botão fecha 
                o menu principal e apenas a palavra dentro do botão redireciona */}
                <Link to="/" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Home
                  </Button>
                </Link>

                <Link to="/quem" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Quem Sou
                  </Button>
                </Link>

                <Link to="/projetos" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Projetos
                  </Button>
                </Link>

                <Link to="/contato" onClick={closeSidebar}>
                  <Button variant="outline-success" className={styles.offCanvasButton}>
                    Contato
                  </Button>
                </Link>

              </Offcanvas.Body>  

            </Offcanvas> 

          
        </Container>
        </Container>
      </Navbar>

    </>
      


  )
}
