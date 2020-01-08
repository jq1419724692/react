function list(state={
    data:[],
    loading:true
},action){
    switch(action.type){
        case "LIST_UPDATE_SUCCESS":
            return {
                data:action.data,
                loading:false
            }
        default:
    }
    
    return state
}
export default list