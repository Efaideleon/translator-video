import Blurr from "../Blur/Blur"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import Prompter from "../Prompter/Prompter"
import Footer from "../Footer/Footer"
import { useWords } from "../../../contexts/ContextAccessFunctions.ts"
import "./styles/StageStyle.css"

export default function Stage() {
    const words = useWords()
    return (
        <div className="stage-container">
            <Blurr />
            <VideoPlayer/>
            <Prompter words={words.english}/>
            <Prompter words={words.spanish}/>
            <Footer />
        </div>
    )
}