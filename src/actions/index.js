import { FETCH_DATA, GET_CHARACTERS } from "./types"
import axios from "axios"

export const fetchData = () => async dispatch => {
  try {
    const request = await axios.get("http://localhost:8080/dice")
    const data = request.data
    //data = data==null ? {} : data
    console.log("RESPONSE: ", data)
    dispatch({ type: FETCH_DATA, payload: data })
  } catch (error) {
    console.log("ERROR IN FETCH-DATA", error.stack)
    dispatch({ type: FETCH_DATA, payload: {} })
  }
}

export const rollDice = () => async dispatch => {
      try {
        const request = await axios.get("http://localhost:8080/dice/change")
        const data = request.data
        //data = data==null ? {} : data
        console.log("RESPONSE: ", data)
        dispatch({ type: FETCH_DATA, payload: data })
      } catch (error) {
        console.log("ERROR IN FETCH-DATA", error.stack)
        dispatch({ type: FETCH_DATA, payload: {} })
      }
    }

    export const getCharacters = () => async dispatch => {
          try {
            const request = await axios.get("http://localhost:8080/game")
            const data = request.data
            //data = data==null ? {} : data
            console.log("RESPONSE: ", data)
            dispatch({ type: GET_CHARACTERS, payload: data })
          } catch (error) {
            console.log("ERROR IN FETCH-DATA", error.stack)
            dispatch({ type: GET_CHARACTERS, payload: {} })
          }
    }