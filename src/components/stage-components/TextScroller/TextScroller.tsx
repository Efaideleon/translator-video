import React, {ReactNode, useEffect, useRef} from "react"

interface TextScrollerProps {
    children: ReactNode
}

function TextScroller({children}: TextScrollerProps) {
    const textScrollerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

    useEffect(() => {
        console.log(textScrollerRef?.current?.offsetHeight)
    }, [])

    return (
        <div className="text-scroller" ref={textScrollerRef}>
            {children}
        </div>)
}

export default TextScroller