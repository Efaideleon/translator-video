import {PROMPTER_WIDTH} from "../constants/Constants";
import React from "react"

export const calculateShouldInsertBreakline = (spanWidth: number, accumulatedSpanWidth: React.MutableRefObject<number>, id: number) => {
    if (id === 0) {
        accumulatedSpanWidth.current = 0
    }
    accumulatedSpanWidth.current += spanWidth
    // if the current span overflows outside the prompter add a breakline to the span
    return accumulatedSpanWidth.current > PROMPTER_WIDTH ? !!(accumulatedSpanWidth.current = spanWidth) : false;
}