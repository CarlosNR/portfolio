import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ColorSchemesExample() {
  return (
    
      <Navbar className={styles.navBar} expand="lg">
        <Container>
          <Navbar.Brand>            
            <Link className={styles.navBrand} to="/">Navbar</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

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
      </Navbar>


  )
}
