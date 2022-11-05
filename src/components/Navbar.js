import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar className={styles.navBar}>
        <Container>
          <Navbar.Brand>            
            <Link className={styles.navBrand} to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="/quem">Quem sou</Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default ColorSchemesExample;