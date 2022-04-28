import React from 'react';

export default class LoginModal extends React.Component{
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

  componentDidMount() {
    // debugger;
    // this.props.fetchUsers();
    // debugger;
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const menu = document.getElementById('top-right-menu');
    menu.classList.remove('show');
    this.props.submitForm(this.state);
    // this.props.history.push('/');
    //commented this out b/c with authroutes, it shoul;d auto redirect
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
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="login-modal" className="session-container">
        <div className='session-modal'>
          <form onSubmit={this.handleSubmit}>
            <div className="session-modal-header">
              <div className="session-formType-div">
                <h2 className="session-formType">Login or sign up</h2>
              </div>
                <h2 className="session-formWelcome">Welcome to Bedfast</h2>
            </div>
            <label className='session-label'>Email:
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <br />

            {(this.props.formType === "Sign Up") ? 
            <>
              <label className='session-label'>First Name:
                <input type="text" value={this.state.fname} onChange={this.update('fname')} />
              </label>
              <br />
              <label className='session-label'>Last Name:
                <input type="text" value={this.state.lname} onChange={this.update('lname')} />
            </label>
            <br />
            </> : <></>}

            <label className='session-label'>Password:
              <input type="text" value={this.state.password} onChange={this.update('password')} />
            </label>
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