import React, { Component } from 'react';
import ChildComp from './Formchild';

class FormParent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
            regNo: '',
            cMEssage:'',
            isLogged:false
        }
    }

    handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value

        this.setState({
            [field]: value
        })
    }

    handleSubmit = (e) => {
        const {username, email, password, regNo} = this.state

       if(username==='' || email==='' || password==='' || regNo===''){
            this.setState({cMessage:'All fields are Mandatory'})
       }else{
            this.setState({
                isLogged:true
            })
       }
        e.preventDefault()
    }

    render() {

        if(!this.state.isLogged){
            return (
                <>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" value={this.state.username}
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={this.state.password}
                                onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="email">Gmail</label>
                            <input type="email" id="email" name="email" value={this.state.email}
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="regNo">Roll No</label>
                            <input type="number" id="regNo" name="regNo" value={this.state.regNo}
                                onChange={this.handleChange} />
                        </div>
    
                        <button type="submit">Submit Here</button>
    
                        {this.state.cMessage!=='' && <p style={{color:'Red'}}>{this.state.cMessage}</p>}
                    </form>
                </>
            ) 
        }
        if(this.state.isLogged){
            return <ChildComp username={this.state.username} regNo={this.state.regNo} />
        }
        
    }
}

export default FormParent
