import React, { useState, ReactNode } from "react"

interface WordsProviderProps {
    children: ReactNode
}

interface WordsContextProps {
    english: string[]
    spanish: string[]
    phonetic: string[]
}

interface UpdateWordsContextProps {
    setWords: React.Dispatch<React.SetStateAction<WordsContextProps>>
}

export const WordsContext = React.createContext<WordsContextProps>({english: [], spanish: [], phonetic: []})
export const UpdateWordsContext = React.createContext<UpdateWordsContextProps>({setWords: () => {}})

export function WordsProvider({children}: WordsProviderProps) {
    const [words, setWords] = useState<WordsContextProps>({english: [], spanish: [], phonetic: []})

    return (
    <WordsContext.Provider value={words}>
        <UpdateWordsContext.Provider value={{setWords}}>
            {children}
        </UpdateWordsContext.Provider>
    </WordsContext.Provider>
    )
}

