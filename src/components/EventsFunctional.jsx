import { useState } from "react";

const EventsFunctional = (props) => {
    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return(
        <>
            <h2>Soy EventsFunctional</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <span>{counter}</span>
            <button onClick={() => props.greatMe('Alex')}>Great me!!</button>
        </>
    )
}

export default EventsFunctional;