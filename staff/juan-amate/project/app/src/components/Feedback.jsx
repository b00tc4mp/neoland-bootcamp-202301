function Feedback({ message, level = 'success' }) {
    return <p className={`p-3 ${level === 'success' ? "text-[greenyellow]" : "text-[tomato]"}`}>{message}</p>
}

export default Feedback