function user(state={
    data:{},
    loading:true
},action){
    switch(action.type){
        case "USER_UPDATE":
            return {
                data:action.data,
                loading:false
            }
        default:
    }
    
    return state
}
export default user