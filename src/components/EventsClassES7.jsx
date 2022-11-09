import { Component } from "react";

export class EventsClassES7 extends Component {
    state = {
        counter: 0
    }

    sumar = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    restar = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return(
            <>
                <h2>Soy EventsClassES7!</h2>
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
