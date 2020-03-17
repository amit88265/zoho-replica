import React, { Component } from 'react';

class SignUp extends Component {

    submit = (e) => {
        const { _username, _fullname, _email, _password, _mobile, _company } = this.refs;
        const userData = {
            username: _username.value,
            fullname: _fullname.value,
            email: _email.value,
            password: _password.value,
            mobile: _mobile.value,
            company: _company.value
        }
        fetch('http://localhost:8080/zoho/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(res => {
                console.log(res);
                if (res.status === 201) {
                    this.props.showHomePage();
                }
                return res.json();
            })
            .then(data => {
                console.log("data", data);
            })
            .catch(err => {
                console.log("error", err);
            });
        e.preventDefault();
    }


    render() {
        return (
            <form className="signUpForm">
                <input ref="_username" type="text" placeholder="user name" ></input>
                <input ref="_fullname" type="text" placeholder="full name" />
                <input ref="_email" type="email" placeholder="email" />
                <input ref="_password" type="password" placeholder="password" />
                <input ref="_mobile" type="number" placeholder="mobile no." />
                <input ref="_company" type="text" placeholder="company" />
                <button onClick={this.submit}>submit</button>
            </form>
        );
    }
}
export default SignUp;