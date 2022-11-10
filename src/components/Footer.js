import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return(

        <footer className='container rodape border-top'>
            <div className='row my-3'>
                
                <div className='col rodapeApresentacao'>
                    email: si.carlos@gmail.com
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

 