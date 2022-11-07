import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Button, Container, Offcanvas } from 'react-bootstrap'  
import {useState} from 'react'  
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Sidebar() {  
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  return (  
    <>  
    <Navbar className={styles.navBar} expand="lg">
        <Container>
          <Navbar.Brand>            
            <Link className={styles.navBrand} to="/">Navbar</Link>
          </Navbar.Brand>

          <Navbar.Toggle className='toggle' />
          <Navbar.Collapse>

            <Nav className="ms-auto">
              <Button variant="outline-success" className={styles.navButton}>
                  <Link className={styles.navLink} to="/">Home</Link>
              </Button>
              <Button variant="outline-success" className={styles.navButton} >
                  <Link className={styles.navLink} to="/quem">Quem sou</Link>
              </Button>

            </Nav>
          </Navbar.Collapse>

        </Container>
        <Button onClick={showSidebar} variant="outline-success" className={styles.sideButton}>
            <span className={styles.navLink}>Sidebar</span>
        </Button>
    </Navbar>

    <Container className='p-4'>  
      
      <Offcanvas show={show} onHide={closeSidebar}>  

        <Offcanvas.Header closeButton>  
          <Offcanvas.Title>Menu</Offcanvas.Title>  
        </Offcanvas.Header>  
        
        <Offcanvas.Body>  
            <Link className={styles.sideLink} to="/">Home</Link>
            <Link className={styles.sideLink} to="/quem">Quem sou</Link>
        </Offcanvas.Body>  

      </Offcanvas> 

    </Container>  
    </>  
  );  
}  
 