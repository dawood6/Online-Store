import React, { Component, Fragment } from 'react'

export default class Counter extends Component {

    render() {
        return (
            <Fragment>
               <span>{this.props.clickValue}</span>
                {/* {console.log(this.props.clickValue)} */}
            </Fragment>
        )
    }
}
