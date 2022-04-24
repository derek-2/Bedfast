import React from 'react';

export default class SignUpModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            fname: '',
            lname: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault;
        debugger;
        this.props.signUp(this.state);
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br />
                    <label>First Name:
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} />
                    </label>
                    <br />
                    <label>Last Name:
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="text" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    <input type="submit" value={'Sign Up'} />
                </form>
            </>
        )
    }

}