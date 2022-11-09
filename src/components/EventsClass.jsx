import { Component } from "react";

export class EventsClass extends Component {
    constructor() {
        this.state = {
            counter: 0
        }
    }

    sumar() {
        console.log('Estoy sumando...')
    }

    render() {
        return(
            <>
                <h2>Soy EventsClass!</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button>-</button>
                </nav>
                <span>{this.state.counter}</span>
            </>
        )
    }
}
