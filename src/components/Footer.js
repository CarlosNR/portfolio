import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return(

        <footer>
        
            <ul className={styles.social_list}>
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

        </footer>

    )
}

 