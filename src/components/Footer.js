import {Link} from 'react-router-dom'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Footer(){
    return(

        <footer className='container border-top'>
            <div className='row my-3 align-items-center justify-content-center'>
                
                <div className='col-6 align-items-center'>
                    <span style={{color: "var(--texto)"}}>email: si.carlos@gmail.com</span>
                </div>

              
                <div className='col-6 align-items-center'>
                
                    <ul className={styles.listaContato}>
                        <li>
                            {/* <svg/> */}
                            <a href="https://www.facebook.com/carlos.nunesramos" target="_blank" rel="noreferrer"><FaFacebook/></a>
                        </li>
                        <li>
                            <a href="https://github.com/CarlosNR/" target="_blank" rel="noreferrer"><FaGithub/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/carlosnunesramos/" target="_blank" rel="noreferrer"><FaLinkedin/></a>  
                        </li>
                    </ul>

                </div>
            </div>
        </footer>

    )
}

 