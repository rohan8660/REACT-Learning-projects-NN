const initState={
    posts:[
        {id : '1' , title : 'haha' } ,
        {id : '2' , title : 'hihi' } ,
        {id : '3' , title : 'eheh' } 
    ]
}

const rootReducer =(state=initState,action)=>{
    if(action.type==='DELETE_POST'){
        let newPosts= state.posts.filter(post=>{
            return action.id!==post.id
        })
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer;