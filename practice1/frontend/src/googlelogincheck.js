import './App.css';
import { GoogleLogin ,GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useState, useEffect } from 'react';


function Login2(){
    const [ profile, setProfile ] = useState([]);
    // const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    const clientId = '955446613500-go46ujmg3jpfp9o1tvqo8j11on2onkg3.apps.googleusercontent.com';
    const ApiKey ='AIzaSyDDZG0G53mIAqfYjsVnXyjGO96B5DE9eas'
    // const ApiKey ='955446613500-go46ujmg3jpfp9o1tvqo8j11on2onkg3.apps.googleusercontent.com'
    useEffect(() => {
        const initClient = () => {
            // gapi.client.init({
                gapi.auth2.init({
                clientId: clientId,
                ApiKey:ApiKey,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log(JSON.stringify(res.profileObj));
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };
    return(
        <div className="app">
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    {/* <img src={profile.imageUrl} alt="user image" /> */}
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) :(        
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop:'100px'}}
                isSignedIn={true}
            />
            )}
        </div>
    );
}
export default Login2;