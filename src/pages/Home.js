import { LoremIpsum } from "react-lorem-ipsum"

export default function Home(){
    return(
        <div>
            <h1>Homepage</h1>
            <h3>
                <span className="spanHome">
                    <LoremIpsum p={2}/>
                </span>
            </h3>
        </div>
    )
}

 