import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import {Button, Container, Offcanvas, Nav, Navbar, } from 'react-bootstrap'  
import {useState, useEffect} from 'react'  
import icone from './imagens/logo4.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ColorSchemesExample() {

  const [show, setShow] = useState(false) 
  const [bootLg, SetBootLg] = useState(window.innerWidth > 991);

  const closeSidebar = () => setShow(false)
  const showSidebar = () => setShow(true)

  const updateMedia = () => {
    SetBootLg(window.innerWidth > 991)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia);
  }) 

  return (
    <>
    {bootLg ? (

      <Navbar className={styles.navBar} expand="lg">
        <Container>
          <Link  to="/">
            <Navbar.Brand>            
                <img className={styles.icone} src={icone} alt="Navbar"/>
            </Navbar.Brand>
          </Link>

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
    ) : (

      <Navbar className={styles.navBar} expand="lg">
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
      )}

    </>
      
  )
}
