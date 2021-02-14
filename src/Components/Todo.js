import React, {useState} from 'react'
import {connect} from 'react-redux'
import add from '../actions/add'

const Todo = (props) => {

    const [inputData,setInputData] = useState('')
    return (
        <div>
            <ul>
            {props.todo.map(item=><li>{item}</li>)}
            </ul>
            <input type="text" onChange={(e)=>{setInputData(e.target.value)}} />
            <button onClick={()=>{props.add(inputData)}}>ADD</button>
            
        </div>
    )
}

const mapDisaptchToProps = (dispatch) =>{
    return {
        add: (data)=>{dispatch(add(data))}
    }
}

const mapStateToProps = (state) =>{
    return {
        todo: state.todo
    }

}

export default connect(mapStateToProps,mapDisaptchToProps)(Todo)
