import { useState } from "react";

const EventsFunctional = () => {
    const [counter, setCounter] = useState(0);

    return(
        <>
            <h2>Soy EventsFunctional</h2>
            <span>{counter}</span>
        </>
    )
}

export default EventsFunctional;