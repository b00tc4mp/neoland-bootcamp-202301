function App() {
    const [loading, setLoading] = React.useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    return loading? <img width="50px" src="https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif" alt="" /> : <h1>hello world</h1>
}


const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)