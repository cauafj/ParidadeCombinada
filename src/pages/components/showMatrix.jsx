const ShowMatrix = (props) => {
    return (
        <div className="App">
            {props.matrix.map(e => {
                return (<h1 style={{margin: 0, letterSpacing: "2vw"}}>{e.map(el => el)}</h1>)
            })}
            <button onClick={() => props.again()}>De novo</button>
        </div>
    )
}

export default ShowMatrix