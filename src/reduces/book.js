function book(state={
    data:[],
    loading:true
},action){
    switch(action.type){
        case "BOOK_UPDATE":
            return {
                data:action.data,
                loading:false
            }
        case "ABOUT_UPDATE":
            return {
                data:action.data,
                loading:false
            }
        default:
    }
    
    return state
}
export default book