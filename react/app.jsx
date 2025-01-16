function App(){
    const x=1;
    const y=2;

    return(
        <div>{x+y}</div>
    );
}
ReactDOM.render(<App />,document.querySelector("#addition"))
function Hello(props){
    return (
        <h1>hello! ,{props.name}</h1>
    )
}

function App1(){
    return(
      <div>
        <Hello name="Harry"/>
        <Hello name="bob"/>
        <Hello name="Luke"/>
      </div>
    )
}
ReactDOM.render(<App1 />,document.querySelector("#hello"))

function Counter(){
     const[count, setCount]=React.useState(28);
     function updateCount(){
        setCount(count+1);
     }
    return(
        <div>
        <div>{count}</div>
        <button onClick={updateCount}>Count</button>
        </div>
    )
}
ReactDOM.render(<Counter />,document.querySelector("#counter"))

