import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {Actions} from '../../common/redux/actions';
import styles from './styles.scss';
import { DEVTOOLS_LINK } from '../constants';

const mapStateToProps = state => ({
  login: state.login
});

class LoginFormComponent extends Component {
	render(){
		const {handleSubmit} = this.props
		return (
			<form onSubmit={handleSubmit} className={styles.__login}>
        <div className="d-flex flex-column justify-content-center login-wrapper">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex form flex-column justify-content-around">
              <h5>Simple redux-form example</h5>
              <p>Type in an email and password, to see some redux actions and saga in action.
                Install <a href={DEVTOOLS_LINK} target="_blank">redux-devtools Chrome extension</a> to inspect the state.</p>

                { ! this.props.login.success &&
                  <div className="d-flex flex-column justify-content-around login-fields">
            				<Field
            					component="input"
            					type="email"
            					placeholder="Email"
            					name="email"
                      className="form-control"
            				/>
            				<Field
            					component="input"
            					type="password"
            					placeholder="Password"
            					name="password"
                      className="form-control"
            				/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                }

              { this.props.login.success &&
                <div className="alert alert-success">Login state transitioned to success!</div>
              }

            </div>
          </div>
        </div>
			</form>
		);
	}
}

// Map the state so we can do stuff
const ConnectedFormComponent = connect(mapStateToProps)(LoginFormComponent);

const LoginForm = reduxForm({
  form: 'login' // a unique identifier for this form
})(ConnectedFormComponent);

const LoginFormContainer = (props) => (
  <LoginForm onSubmit={(vals) => props.requestLogin({
      username: vals.email,
      password: vals.password
    }) } />
);

const mapDispatchToProps = ({
  requestLogin: Actions.LOGIN_REQUEST
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
