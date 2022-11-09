import { Component } from "react";

export class EventsClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return(
            <>
                <h2>Soy EventsClass!</h2>
                <nav>
                    <button>+</button>
                    <button>-</button>
                </nav>
                <span>{this.state.counter}</span>
            </>
        )
    }
}
