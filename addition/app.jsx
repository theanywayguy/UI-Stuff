function App() {
    const [state, setState] = React.useState({
        num1: Math.ceil(Math.random() * 10),
        num2: Math.ceil(Math.random() * 10),
        response: "",
        score: 0,
        isCorrect:null,
    });

    function updateResponse(event) {
        setState({
            ...state,
            response: event.target.value
        });
    }

    function inputKeyPress(event) {
        if (event.key === "Enter") {
            const answer = parseInt(state.response);
            if (state.num1 + state.num2 === answer) {
                setState({
                    ...state,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    score: state.score + 1,
                    response: "",
                    isCorrect:true
                });
            } else {
                setState({
                    ...state,
                    score: state.score - 1,
                    response: "",
                    isCorrect:false,
                });
            }
        }
    }

    if(state.score===10){
        return(
            <div id="verdict">
                YOU WON!
            </div>
        )
    }
    if(state.score===-5){
        return(
            <div id="verdict">
                YOU LOST!
                REFRESH THE PAGE TO RESTART
            </div>
        )
    }
    return (
        <div className={`app ${state.isCorrect===null?'':state.isCorrect?'correct':'incorrect'}`} >
            <Question num1={state.num1} num2={state.num2} />
            <ResponseInput 
                response={state.response} 
                updateResponse={updateResponse} 
                inputKeyPress={inputKeyPress} 
            />
            <Score score={state.score} />
        </div>
    );
}

function Question({ num1, num2 }) {
    return (
        <div className="question">
            {num1} + {num2}
        </div>
    );
}

function ResponseInput({ response, updateResponse, inputKeyPress }) {
    return (
        <input 
            autoFocus={true}
            type="number"
            onKeyUp={inputKeyPress} 
            onChange={updateResponse}
            value={response}
            className="response-input"
        />
    );
}

function Score({ score }) {
    return (
        <div className="score">
            Score: {score}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#addition"));
