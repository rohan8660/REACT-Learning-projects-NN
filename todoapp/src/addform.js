import React, { Component  } from "react";

class addform extends Component {
    state = {  
        content:""
    };
    whenchange =(e) =>{
        this.setState({
            content:e.target.value
        })
    }
    whensubmit =(e) =>{
        e.preventDefault();
        this.props.addtodof(this.state);
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.whensubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.whenchange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default addform;