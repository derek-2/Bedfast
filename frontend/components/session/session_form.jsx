import React from 'react';

export default class SessionFormModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    // this.props.fetchCurrentUser();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div id='session-modal'>
        <h1>{this.props.formType} Form</h1>
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
          <input type="submit" value={this.props.formType} />
        </form>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

}