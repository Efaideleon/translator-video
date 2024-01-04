import React, {useRef} from 'react'
import "./styles/SpanStyle.css"
import useGetBreaklineFlagForSpan from '../../../hooks/useGetBreakline'

interface SpanProps {
    word: string
    spanWidthSum: React.MutableRefObject<number>
    id: number
}

export default function Span({word, spanWidthSum, id}: SpanProps) {
    const spanRef = useRef(null)
    const breakline = useGetBreaklineFlagForSpan(spanRef, spanWidthSum, id)

    return (
        <span role={'span'}>
            <span ref={spanRef} className='span-text' id="spans-text">
                {breakline ? <br data-test-id={'break'}/> : ""}
                {word}
            </span>
        </span>
    )
}
