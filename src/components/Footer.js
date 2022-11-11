import {Link} from 'react-router-dom'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Footer(){
    return(

        <footer className='container border-top'>
            <div className='row my-3'>
                
                <div className='col-lg-6'>
                    <span style={{color: "var(--texto)"}}>email: si.carlos@gmail.com</span>
                </div>

              
                <div className='col-lg-6'>
                
                    <ul className={styles.listaContato}>
                        <li>
                            {/* <svg/> */}
                            <FaFacebook/>
                        </li>
                        <li>
                            <FaGithub/>
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

 