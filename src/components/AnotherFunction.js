const AnotherFunction = () => {

    const handleClick = () => {
        console.log("Clicou no botão!")
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick = {handleClick}>Evento de click</button>
            <hr />
            <button onClick = {() => console.log("Teste")}></button>
        </div>
    )
}

export default AnotherFunction;