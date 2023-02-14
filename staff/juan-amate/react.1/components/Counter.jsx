function Counter() {
    console.log('Counter -> render')

    // Declare a new state variable, which we'll call "count"

    //   const state = React.useState(0)
    //   const count = state[0]
    //   const setCount = state[1]

    // la primera variable se inicia a 0 y la segunda variable es una función
    const [count, setCount] /* array destructuring */ = React.useState(0)

    const handleCountUp = () => setCount(count + 1)

    const handleCountDown = () => setCount(count - 1)

    const handleReset = () => setCount(0)


    return <div>
        <p>You clicked {count} times</p>

        <button onClick={handleCountUp}>Count up</button>
        <button onClick={handleCountDown}>Count down</button>
        <button onClick={handleReset}>Reset</button>
    </div>
}