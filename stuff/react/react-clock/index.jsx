function getTime() {
    return new Date().toISOString().substring(11, 19).replace('T', ' ')
}

function App() {
    const [time, setTime] = React.useState(getTime())

    setInterval(() => {
        setTime(getTime())
    }, 1000)

    return <h1>{time}</h1>
}


const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)