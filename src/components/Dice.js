import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import ButtonCode from "./ButtonCode"
import '../App.css'

class Dice extends Component {

    // Assigns the initial this.state of the component
    constructor(props){
        super(props)
        this.state = {loading:true}
        this.renderData = this.renderData.bind(this)
    }

   async componentDidMount() {
       await this.props.fetchData()
       this.setState({loading: false})
    }

    renderData(){
        if (this.state.loading){
            return <div>Loading...</div>
        } else {
            return <div>You rolled a {this.props.data.face}</div>
        }
    }

    render() {
        return (
            <div className = "home">
                {this.renderData()}
                <ButtonCode />
            </div>
        )
    }
}

function mapStateToProps( state ){
    return { data: state.data }
}

export default connect(mapStateToProps, actions)(Dice)