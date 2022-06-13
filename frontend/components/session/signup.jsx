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
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(() => {
        document.getElementById('signup-modal').classList.toggle('hidden');
        document.getElementById('session-modal-container').classList.toggle('hidden');
      })
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({
      email: 'demo@gmail.com',
      password: 'password'
    })
    document.getElementById('signup-modal').classList.toggle('hidden');
    document.getElementById('session-modal-container').classList.toggle('hidden');
  }

  render() {
    return (
      <div id="signup-modal" className="session-container hidden">
        <div className='session-modal'>
          <form className='session-form' onSubmit={this.handleSubmit}>
          <div className="session-modal-header">
              <div className="session-formType-div">
                <h2 className="session-formType">Sign up</h2>
              </div>
                <h2 className="session-formWelcome">Welcome to Bedfast</h2>
            </div>
            <div className="session-div">
              <input type="text" className="inputText" value={this.state.email} onChange={this.update('email')} />
              <span className="floating-label">Email address</span>
            </div>
            <>
            <div className="session-div">
              <input type="text" className="inputText" value={this.state.fname} onChange={this.update('fname')}/>
              <span className="floating-label">First Name</span>
            </div>
            <div className="session-div">
              <input type="text" className="inputText" value={this.state.lname} onChange={this.update('lname')}/>
              <span className="floating-label">Last Name</span>
            </div>
            </>
            <div className="session-div">
              <input type="password" className="inputText" value={this.state.password} onChange={this.update('password')} />
              <span className="floating-label">Password</span>
            </div>
            <br />
            {(this.props.errors.length !== 0) ? this.props.errors.map((error,idx) => <p key={idx}>{error}</p>) : <></>}
            <input className='session-btn' type="submit" value={this.props.formType} />
            <button className='session-btn' onClick={this.demoLogin}>Demo Login</button>
          </form>
        </div>
      </div>
    )
  }

}