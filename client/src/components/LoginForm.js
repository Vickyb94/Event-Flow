import React from 'react';

const LoginForm = () => {
    return (
        <div class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <label for="email">Email</label>
                        <input class="input is-primary" type="text" placeholder="Email address"></input>
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-primary" type="password" placeholder="Password"></input>
                            <a href="forget.html" class="is-size-7 has-text-primary">forget password?</a>
                    </div>
                    <div class="column">
                        <button class="button is-primary is-fullwidth" type="submit">Login</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> Don't have an account? <a href='/SignUp' class="has-text-primary">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
                    )
};


                    export default LoginForm;