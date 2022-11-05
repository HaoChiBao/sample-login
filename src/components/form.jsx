import React, { Component } from 'react';
import './form.css';

/**
 * Colour Bank
 * #ee7752 - orange
 * #e73c7e - pink
 * #23a6d5 - blue
 * #23d5ab - green
 */

class Form extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    } 
    render() { 
        this.handleResize()
        return (
            <React.Fragment>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
                {this.signUp()} 
            </React.Fragment>
        ); 
    }

    handleResize = () => {
        window.addEventListener('resize', () => {
            console.log(1)
        })
    }

    handleSignUp = (e) => {
        e.preventDefault();
        console.log(1)
    }

    signUp(){
        return (
            <form>
                <div id = 'container'>
                    <h1>Sign Up</h1>
                    <div>
                        {/* keep working on this */}
                    </div>
                    <div className = 'input'>
                        <label htmlFor="username">Username</label>
                        <input id = "username" type = 'text'></input>
                    </div>
                    <div className = 'input'>
                        <label htmlFor="email">Email</label>
                        <input id = "email" type = 'email'></input>
                    </div>
                    <div className = 'input'>
                        <label htmlFor="password">Password</label>
                        <input id = "password" type = 'password'></input>
                    </div>
                    <div className = 'input'>
                        <label htmlFor="re_password">Re-enter Password</label>
                        <input id = "re_password" type = 'password'></input>
                    </div>
                    <div className = 'input'>
                        <button onClick = {this.handleSignUp}>Submit</button>
                    </div>
                    <footer>
                        already have an account?
                    </footer>
                </div>
            </form>
        );
    }
}
 
export default Form;