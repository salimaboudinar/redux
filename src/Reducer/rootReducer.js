const rootReducer = (state={todo:['done','drinking coffee']},action)=>{
    if(action.type=='ADD'){
        return state ={todo:[...state.todo,action.payload]}
    }
    else
     return state

}

export default rootReducer