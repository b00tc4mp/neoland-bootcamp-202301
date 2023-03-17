function Feedback({ message, level = 'success' }) {
    return <p className={`p-3 ${level === 'success' ? 'text-yellow-500' : 'text-red-600'}`}>{message}</p>
}

export default Feedback