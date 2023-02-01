function Counter(){
    const [count,setCount] =React.useState(0)

    return <div>
        <p>You clicked {count} times</p>

        <button onClick={() => setCount(count + 1)}>count up</button>
        <button onClick={() => setCount(count - 1)}>count down</button>
        <button onClick={() => setCount(0)}>resset</button>
    </div>
}