import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Footer(){
    return(

        <footer className='container rodape border-top'>
            <div className='row my-3'>
                
                <div className='col'>
                    <span style={{color: "var(--texto)"}}>email: si.carlos@gmail.com</span>
                </div>

                <div className='col rodapeDesk'>

                </div>
                
                <div className='col rodapeMobile'>
                
                    <ul className={styles.listaContato}>
                        <li>
                            {/* <svg/> */}
                            <FaFacebook/>
                        </li>
                        <li>
                            <FaInstagram/>
                        </li>
                        <li>
                            <FaLinkedin/>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>

    )
}

 