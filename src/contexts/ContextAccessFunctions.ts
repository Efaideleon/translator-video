import { useContext } from 'react'
import { BreaklinesContext, UpdateBreaklinesContext } from './BreaklinesProvider'
import { WordsContext, UpdateWordsContext } from './WordsProvider'

export function useGetBreaklines() {
    return useContext(BreaklinesContext).breaklineFlags
}

export function useUpdateBreaklines() {
    return useContext(UpdateBreaklinesContext).setBreaklineFlags
}

export function useWords() {
    return useContext(WordsContext)
}

export function useUpdateWords() {
    return useContext(UpdateWordsContext).setWords
}