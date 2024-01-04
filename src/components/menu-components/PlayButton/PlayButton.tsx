type PlayButtonProps = {
    onSubmit: () => void 
}

export default function PlayButton({onSubmit}: PlayButtonProps) {
    const buttonStyle = {
        height: "100px",
        fontSize: "30px",
    }
    
    return (
        <>
           <button style={buttonStyle} onClick={onSubmit}>Play</button> 
        </>	
    )
}