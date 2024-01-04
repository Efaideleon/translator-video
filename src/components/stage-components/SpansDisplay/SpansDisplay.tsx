import "./styles/SpansDisplayStyle.css"
import Span from "../Span/Span"
import { useRef } from "react"

interface SpansDisplayProps {
    words: string[]
}

export default function SpansDisplay({ words }: SpansDisplayProps) {
    const spanWidthSum = useRef(0)
    return (
        <div className="spans-container">
            {words ?
                words.map((word, index) => {
                    return <Span
                        word={word}
                        spanWidthSum={spanWidthSum}
                        id={index}
                        key={index}
                    />
                })
                : ""
            }
        </div>
    )
}