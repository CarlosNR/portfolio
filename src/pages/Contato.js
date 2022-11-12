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
                            Email
                        </li>
                        <li className="mt-3"> 
                            <FaFacebook/>           
                            Facebook
                        </li>
                        <li className="mt-3">
                            <FaGithub/>
                            Github
                        </li>
                        <li className="mt-3">
                            <FaLinkedin/>
                            Linkedin
                        </li>
                    </ul>
                </h2>

                </div>
            </div>
        </div>
    )
}

 