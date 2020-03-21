import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
// import CharacterProfile from './CharacterProfile'

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

// load all of the characters
// each character needs to have an image associated with them
// each character needs to have a description associated with them
// there needs to be a CSS / html framework for each of the little blocks that I'm going to use
// If i click any of the characters, then the others will fade out and then that one will be the only one present


class CharacterChoice extends Component {

    // Assigns the initial this.state of the component
    constructor(props){
        super(props)
        this.state = {loading:true}
        this.renderData = this.renderData.bind(this)
    }

    async componentDidMount() {
        await this.props.getCharacters()
        this.setState({loading: false})
     }

     renderData(){
         let renderString = "<div>";

        if (this.state.loading){
            return <div>Loading...</div>
        } else {

            const roleItems = this.props.data.roleStack.map((role, index)=>
                <li key={index}>{role}</li>
            );
            return (
                <ul>{roleItems}</ul>
            )
        }
    }

    render() {
        return (
            <div>
            
            {this.renderData()}
            </div>
        )
    }

}

function mapStateToProps( state ){
    return { data: state.data }
}

export default connect(mapStateToProps, actions)(CharacterChoice)