import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Form from './../components/Form';


const Login = ({ setName }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        setRedirect(true);
        setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return ( <Form 
        onSubmit={handleSubmit}
        onChangeEmail={e => setEmail(e.target.value)}
        onChangePassword={e => setPassword(e.target.value)}
        title={'Sign In'} />  );
}
 
export default Login;