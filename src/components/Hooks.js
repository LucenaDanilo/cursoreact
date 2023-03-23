import { useState } from "react";

const Hooks = () => {

    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    const ChangeAge = () => {
        idade = 31;
    };

    const ChangeNewAge = () => {
        setNovaIdade(45);
    };

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick = {ChangeAge}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick = {ChangeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks