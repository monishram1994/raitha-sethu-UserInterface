import React, { Component } from "react";
import '../styles/login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Login extends Component {
    render() {
        return (
            
                <div id="login">
                        <h3 class="text-center text-green pt-5">
                            Login form
                        </h3>
                        <div class="container">
                            <div id="login-row" class="row justify-content-center align-items-center">
                                <div id="login-column" class="col-md-6">
                                    <div id="login-box" class="col-md-12">
                                        <form id="login-form" class="form" action="" method="post">
                                            
                                            <div class="form-group">
                                                <label for="username" class="text-info">Mobile Number:*</label><br />
                                                <input type="text" name="username" id="username" class="form-control"  placeholder='Enter registered mobile number'/>
                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="text-info">PIN:*</label><br />
                                                <input type="text" name="password" id="password" class="form-control" placeholder='Enter 4 digit pin'/>
                                            </div>

                                            <div class="form-group">
                                                <br />                                                
                                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                                            </div>
                                            <p className="forgot-password text-right">
                                                New user ? <a href="/Register">Register</a> here
                                            </p>
                                        </form>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                </div>
            );
    }
}