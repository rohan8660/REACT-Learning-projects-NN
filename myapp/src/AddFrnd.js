import React,{Component} from 'react'

class AddFrnd extends Component {
    state={
        name:null,
        number:null
    }
    whensubmit =(e)=>{
        e.preventDefault();
        this.props.addfrnd(this.state);
    }
    whenchange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.whensubmit}>
                    <h1>add frnds</h1>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' onChange={this.whenchange}/>
                    <label htmlFor="number">Number:</label>
                    <input type="text" id='number' onChange={this.whenchange}/>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
export default AddFrnd;