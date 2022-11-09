import { Component } from "react";

export class EventsClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.sumar = this.sumar.bind(this);
    }

    sumar() {
        this.setState({
            counter: this.state.counter + 1
        })
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
