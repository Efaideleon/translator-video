import React, { useState, ReactNode, SetStateAction, Dispatch } from 'react'

interface BreaklinesProviderProps {
    children: ReactNode;
}

interface BreaklinesContextProps {
    breaklineFlags: boolean[]
}

interface UpdateBreaklinesContextProps {
    setBreaklineFlags: Dispatch<SetStateAction<boolean[]>>
}
export const BreaklinesContext = React.createContext<BreaklinesContextProps>({breaklineFlags: []})
export const UpdateBreaklinesContext = React.createContext<UpdateBreaklinesContextProps>({setBreaklineFlags: () => {}})

export function BreaklinesProvider({ children }: BreaklinesProviderProps) {
    const [breaklineFlags, setBreaklineFlags] = useState<boolean[]>([])

    return (
        <BreaklinesContext.Provider value={{breaklineFlags}}>
            <UpdateBreaklinesContext.Provider value={{setBreaklineFlags}}>
                {children}
            </UpdateBreaklinesContext.Provider>
        </BreaklinesContext.Provider>
    )
}