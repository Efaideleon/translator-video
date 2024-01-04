import TextInput from "../TextInput/TextInput.tsx"
import PlayButton from "../PlayButton/PlayButton.tsx"
import { useState } from "react"
import "./styles/MenuStyle.css"
import { useUpdateWords } from "../../../contexts/ContextAccessFunctions.ts"
import { useUpdateBreaklines } from "../../../contexts/ContextAccessFunctions.ts"
import useGetWordsAndBreaklines from "../../../hooks/useGetWordsAndBreaklines.tsx"

interface WordData {
    english: string[]
    spanish: string[]
    phonetic: string[]
}

export default function Menu() {
    const [inputText, setInputText] = useState<string>('')

    const updateWords = useUpdateWords()
    const updateBreaklines = useUpdateBreaklines()
    const getWordsAndBreaklines = useGetWordsAndBreaklines
    const handleClick = () => {
        const {english, spanish, phonetic, breaklines} = getWordsAndBreaklines(inputText)
        const words: WordData = {english, spanish, phonetic}
        updateWords(words)
        updateBreaklines(breaklines)
    }
    
    return (
        <div className="menu">
            <TextInput setInputText={setInputText} placeholder={"English"}/>
            <TextInput setInputText={() => {}} placeholder={"Spanish"}/>
            <TextInput setInputText={() => {}} placeholder={"Phonetic"}/>
            <PlayButton onSubmit={handleClick} />
        </div>
    )
}