import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    } 
    render() { 
        return (
            <React.Fragment>
                {this.signUp()} 
            </React.Fragment>
        ); 
    }

    signUp(){
        return (
            <form action = '/canada'>
                <section>
                    <div id = 'container'>
                        <h1>Sign Up</h1>
                        <div className = 'input'>
                            <label htmlFor="username">Username</label>
                            <input id = "username" type = 'text'></input>
                        </div>
                        <div className = 'input'>
                            <label htmlFor="username">Email</label>
                            <input id = "username" type = 'email'></input>
                        </div>
                        <div className = 'input'>
                            <label htmlFor="password">Password</label>
                            <input id = "password" type = 'password'></input>
                        </div>
                        <div className = 'input'>
                            <label htmlFor="re_password">Re-enter Password</label>
                            <input id = "re_password" type = 'password'></input>
                        </div>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}
 
export default Form;