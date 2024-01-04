import { useState, ChangeEvent } from 'react'

type TextInputProps = {
    setInputText: (text: string) => void
    placeholder: string
}

export default function TextInput({setInputText, placeholder}: TextInputProps) {
    const [userInputText, setUserInputText] = useState("")

    const updateInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        setUserInputText(text)
        setInputText(text)
    }

    return (
        <div>
            <textarea value={userInputText} onChange={updateInputText} rows={5} placeholder={placeholder}></textarea>
        </div>	
    )
}