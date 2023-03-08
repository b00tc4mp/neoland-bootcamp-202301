function Counter() {
    console.log('Counter -> render')

    // Declare a new state variable, which we'll call "count"

    //   const state = React.useState(0)
    //   const count = state[0]
    //   const setCount = state[1]

    const [count, setCount] /* array destructuring */ = React.useState(0)

    return <div className="box">
        <p>You clicked {count} times</p>

        <button onClick={() => setCount(count + 1)}>Count up</button>
        <button onClick={() => setCount(count - 1)}>Count down</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
}
