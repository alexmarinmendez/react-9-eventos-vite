import { Component } from "react";

export class EventsClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    restar() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    greatMe(name) {
        alert('Hello!!' + name)
    }

    render() {
        return(
            <>
                <h2>Soy EventsClass!</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <span>{this.state.counter}</span>
                <button onClick={() => this.greatMe('Alex')}>Great me!!</button>
            </>
        )
    }
}
