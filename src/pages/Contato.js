import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


export default function Contato(){
    return(

        <div className='container containerContato'>
            <div className='row corpoApresentacao corpoContato' >
                              
                <div className='col order-last order-lg-first my-3 '>

                <h2 className='h2Contato'>
                    <ul className="listaContato">
                        
                        <li className="mt-3">
                            <HiOutlineMail/>
                            Email: <span style={{color: "var(--links)"}}>si.carlosnr@gmail.com</span>
                        </li>
                        <li className="mt-3"> 
                            <FaFacebook/>           
                            <a className='linkContato' href="https://www.facebook.com/carlos.nunesramos" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                        <li className="mt-3"> 
                            <FaGithub/>           
                            <a className='linkContato' href="https://github.com/CarlosNR/" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li className="mt-3"> 
                            <FaLinkedin/>           
                            <a className='linkContato' href="https://www.linkedin.com/in/carlosnunesramos/" target="_blank" rel="noreferrer">Linkedin</a>
                        </li>
                        
                    </ul>
                </h2>

                </div>
            </div>
        </div>
    )
}

 