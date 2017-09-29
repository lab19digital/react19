import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import {Actions} from '../../common/redux/actions';
import styles from './styles.scss';

const mapStateToProps = state => ({});

class LoginFormComponent extends Component {
	render(){
		const {handleSubmit} = this.props
		return (
			<form onSubmit={handleSubmit} className={styles.__login}>
        <div className="d-flex flex-column justify-content-center login-wrapper">
          <div className="d-flex flex-column align-items-center">
            <div>
              <h2>React19</h2>
              <ul>
                <li>react</li>
                <li>redux</li>
                <li>redux-devtools</li>
                <li>redux-form</li>
                <li>redux-saga</li>
                <li>Bootstrap 4 (with Flexbox support)</li>
                <li>Webpack</li>
                <li>Hot-reloading</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex form flex-column justify-content-around">
              <h5>Simple redux-form example</h5>
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
          </div>
        </div>
			</form>
		);
	}
}

const LoginFormContainer = (props) => (
  <LoginForm onSubmit={(vals) => props.requestLogin({
      username: vals.email,
      password: vals.password
    }) } />
);

const LoginForm = reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginFormComponent);

export default connect(mapStateToProps, {
	requestLogin: Actions.LOGIN_REQUEST
})(LoginFormContainer);
