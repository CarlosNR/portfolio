import { LoremIpsum } from "react-lorem-ipsum"
import placeholder from '../components/placeholder.jpg'

export default function Home(){
    return(
        
        <div className="container">
            <div className="row">
                <h1>Homepage</h1>
            </div>
            <div className="row align-items-center justify-content-center">

                <div className="col-lg-8 align-items-center order-last order-lg-first">   
                    <h3>
                        <span className="spanHome">
                            <LoremIpsum p={1}/>
                        </span>
                    </h3>
                </div>
                
                <div className="d-flex align-items-center justify-content-center col-md-4 fotoHome order-first order-lg-first">
                    <img src={placeholder} alt="placeholder"/>
                </div>

            </div>
        </div>
        
    )
}

 