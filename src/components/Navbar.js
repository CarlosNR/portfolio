import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Button, Container, Offcanvas} from 'react-bootstrap'  
import {useState} from 'react'  
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
            <Link className={styles.navBrand} to="/">Navbar</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Button variant="outline-success" className={styles.navButtonUm}>
                <Link className={styles.navLink} to="/">Home</Link>
              </Button>
              <Button variant="outline-success" className={styles.navButton} >
                <Link className={styles.navLink} to="/quem">Quem sou</Link>
              </Button>
              <Button variant="outline-success" className={styles.navButtonUm}>
                <Link className={styles.navLink} to="/projetos">Projetos</Link>
              </Button>
              <Button variant="outline-success" className={styles.navButton} >
                <Link className={styles.navLink} to="/contato">Contato</Link>
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className={styles.navBarMob} expand="lg">
        <Container>

          <Navbar.Brand>            
            <Link className={styles.navBrand} to="/">Navbar</Link>
          </Navbar.Brand>

          <Navbar.Toggle onClick={showSidebar} className="ms-auto"/>

          <Container>  

            <Offcanvas show={show} onHide={closeSidebar}>  

              <Offcanvas.Header className={styles.offCanvasHead} closeButton>  
                <Offcanvas.Title className={styles.canvasMenu}>Menu</Offcanvas.Title>  
              </Offcanvas.Header>  
              
              <Offcanvas.Body className={styles.offCanvasBody}>  
                {/* Colocar o button DENTRO do link, se não o botão fecha 
                o menu principal e a palavra dentro do botão redireciona e 
                fecha o menu */}
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
