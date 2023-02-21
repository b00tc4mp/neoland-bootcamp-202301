function Counter() {
    console.log('Counter -> render')


    // Declare a new state variable, which we'll call "count"

    // const state = React.useState(0) devuelve un array
    // const count = state[0] estado actual, es una variable
    // const setCount = state[1] funcion para cambiar el estado

    const [count, setCount] /* array destructuring */ = React.useState(0)  //Hook useState() es el estado inicial

    return <div>
        <p>You clicked {count} times</p>

        <button onClick={() => setCount(count + 1)}>Count up</button>
        <button onClick={() => setCount(count - 1)}>Count down</button>
        <button onClick={() => setCount(0)}>Reset</button>

    </div>
}