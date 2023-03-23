import AnotherFunction from "./AnotherFunction";


function FirstComponent() {

    const name = "Danilowell";

    return (
        <div className="firstcomponents">
            <p>Primeiro Componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherFunction/>
        </div>
    )
}

export default FirstComponent