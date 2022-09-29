import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState(prev => ({
            count: prev.count + 1
        })
        )
    }

    decrement() {
        this.setState(
            prev => (
                {
                    count: prev.count - 1
                }
            )
        )
    }

    // resetBtn() {
    //     this.setState(
    //         prev => ({
    //             count: 0
    //         })
    //     )
    // }

    render() {
        return (
            <div>
                <h1> Count = {this.state.count}</h1>
                <button onClick={() => {
                    this.increment()
                }}>Increment</button>
                <button onClick={() => {
                    this.decrement()
                }}>decrement</button>
                {/* <button onClick={this.resetBtn()}>Reset</button> */}
            </div>
        )
    }
}
export default Counter