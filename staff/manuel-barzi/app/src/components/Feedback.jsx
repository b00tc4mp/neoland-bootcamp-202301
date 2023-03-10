function Feedback({ message, level = 'success'}) {
    return <p className={`font-odibee text-lg ${level === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{message}</p>
}

export default Feedback