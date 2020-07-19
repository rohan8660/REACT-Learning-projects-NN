import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deletePost} from './../actions/postActions'

 class post extends Component {
     handleClick=()=>{
         this.props.deletePost(this.props.post.id);
         this.props.history.push('/')
     }
    
    render() {
        console.log(this.props);
        const post =this.props.post ?
        (
            <div className="post">
                <h4 className="center">
                    {this.props.post.title}
                </h4>
                <p>
                {this.props.post.body}
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>DELETE POST</button>
                </div>
                </p>
            </div>
        ):
        (
            <div className="center">
                lOADING pOST .....
            </div>
        )
        return (
            <div>
                <div className="container">
                    {post}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state,ownprops)=>{
    let id=ownprops.match.params.post_id;
    return{
        post:state.posts.find(post => post.id===id)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost: (id) => { dispatch(deletePost(id) ) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(post);