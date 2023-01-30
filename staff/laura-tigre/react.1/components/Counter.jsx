function Counter(){
     console.log('Counter -> render')


     const [count, setCount]= React.useState(0)


     return <div>
        <p> Has hecho click {count} veces</p>
          <button onClick={() => setCount(count +1)}>Count up</button>
          <button onClick={() => setCount(count -1)}>Count Down</button>
          <button onClick={() => setCount(0)}>Reset</button>

      </div>
}