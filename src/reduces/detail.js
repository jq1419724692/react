function detail(state={
    data:{
        title:"",
        content:"",
        createdate:"",
        tab:"",
        reply_count:0,
        avatar_url:"",
        loginname:"",
        reply_list:[]
    },
    loading:true
},action){
    switch(action.type){
        case "DETAIL_UPDATE":
            return {
                data:action.data,
                loading:false
            }
        default:
    }
    
    return state
}
export default detail