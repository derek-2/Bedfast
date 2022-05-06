import React from 'react';

export default class LoginModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    console.log('hello');
    e.preventDefault();
    const menu = document.getElementById('top-right-menu');
    menu.classList.remove('show');
    this.props.submitForm(this.state);
    // this.props.history.push('/');
  }

  demoLogin() {
    const menu = document.getElementById('top-right-menu');
    menu.classList.remove('show');
    this.props.login({
      email: 'Demo',
      fname: 'Demo',
      lname: 'Demo',
      password: 'password'
    })
    // this.props.history.push('/');
  }

  render() {
    console.log(this.state);
    return (
      <div id="login-modal" className="session-container">
        <div className='session-modal'>
          <form onSubmit={this.handleSubmit}>
            <div className="session-modal-header">
              <div className="session-formType-div">
                <p className="session-formType">Login</p>
              </div>
                <p className="session-formWelcome">Welcome to Bedfast</p>
            </div>
            <div className="session-div">
              <input type="text" className="inputText" value={this.state.email} onChange={this.update('email')} />
              <span className="floating-label">Email address</span>
            </div>
            <div className="session-div">
              <input type="password" className="inputText" value={this.state.password} onChange={this.update('password')} />
              <span className="floating-label">Password</span>
            </div>
            <br />
            {(this.props.errors.length !== 0) ? this.props.errors.map((error,idx) => <p key={idx}>{error}</p>) : <></>}
            <input className='session-btn' type="submit" value={this.props.formType} />
            <button className='session-btn' onClick={this.demoLogin}>Demo Login</button>
            <span className="close-session">&times;</span>
          </form>
        </div>
      </div>
    )
  }

}