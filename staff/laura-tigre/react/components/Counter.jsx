function Counter(){
    console.log('Counter -> render')


    const[count, setCount]= React.useState(0)
    return <div>
        <p> You clicked {count} times</p>

<button onClick={() => setCount(count + 1)}>Count up</button>
<button onClick={() => setCount(count - 1)}>Count down</button>
<button onClick={() => setCount(0)}>Reset</button>
    </div>
}