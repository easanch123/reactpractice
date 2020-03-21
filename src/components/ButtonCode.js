import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import { Button } from "reactstrap"
import '../App.css'

class ButtonCode extends Component {

    // Assigns the initial this.state of the component
    constructor(props){
        super(props)
        this.updateData = this.updateData.bind(this)
    }

    updateData(){
        this.props.rollDice()
    }

    render() {
        return (
            <div>
            <Button outline color="success" onClick={this.updateData}>Roll the dice</Button>
            </div>
        )
    }
}

function mapStateToProps( state ){
    return { data: state.data }
}

export default connect(mapStateToProps, actions)(ButtonCode)