import React, {useEffect, useRef} from "react"
import {useGetBreaklines, useUpdateBreaklines} from '../contexts/ContextAccessFunctions.ts'
import {calculateShouldInsertBreakline} from "../helper-functions/HelperFunctions.tsx";

const useGetBreaklineFlagForSpan = (
    currentSpanRef: React.MutableRefObject<HTMLSpanElement | null>,
    accumulatedSpansWidth: React.MutableRefObject<number>,
    spanId: number) => {

    const breaklines: boolean[] = useGetBreaklines()
    const updateBreaklines = useUpdateBreaklines()
    const currentSpanIdRef = useRef(spanId)

    useEffect(() => {
        if (currentSpanRef.current && currentSpanRef.current.offsetWidth !== undefined) {
            try {
                updateBreaklines(([...prevBreaklines]) => {
                    return prevBreaklines.map((flag, index) => {
                        // keep the global span's breaklines array up to date when a span overflows
                        return index === currentSpanIdRef.current ?
                            calculateShouldInsertBreakline(currentSpanRef?.current?.offsetWidth || 0, accumulatedSpansWidth, currentSpanIdRef.current)
                            : flag
                    })
                })
            } catch (error) {
                console.error("Error during breakline update: ", error)
            }
        } else {
            console.error("Error: spanRef is not available or offsetWidth is undefined")
        }
    }, [currentSpanRef, accumulatedSpansWidth, updateBreaklines])
    return breaklines[currentSpanIdRef.current]
}

export default useGetBreaklineFlagForSpan
