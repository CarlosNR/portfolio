import { LoremIpsum } from "react-lorem-ipsum"

export default function Home(){
    return(
        <div>
            <h1>Homepage</h1>
            <span className="spanHome">
                <LoremIpsum p={2}/>
            </span>
            
        </div>
    )
}

 