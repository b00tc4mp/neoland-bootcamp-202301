function Feedback({ message, level = 'success'}) {
    return <p className={`text-sm ${level === 'success' ? "✓ text-black" : "text-red-500"}`}>{message}</p>
}

export default Feedback