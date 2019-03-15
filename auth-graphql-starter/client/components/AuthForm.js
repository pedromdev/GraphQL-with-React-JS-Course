import React, {Component} from 'react';

class AuthForm extends Component {

  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          <div className="input-field">
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Password"
            />
          </div>

          <div className="errors">
            {this.props.errors.map((error, index) => <div key={index}>{error}</div>)}
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;