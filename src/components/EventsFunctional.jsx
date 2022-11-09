import { useState } from "react";

const EventsFunctional = () => {
    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    const greatMe = (name) => {
        alert('Hello!!' + name)
    }

    return(
        <>
            <h2>Soy EventsFunctional</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <span>{counter}</span>
            <button onClick={() => greatMe('Alex')}>Great me!!</button>
        </>
    )
}

export default EventsFunctional;