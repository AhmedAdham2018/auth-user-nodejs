import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

import Form from './../components/Form';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        
        setRedirect(true);
    }
    if (redirect) {
        return <Redirect to="/login"/>;
    }

    return ( <Form 
                onSubmit={handleSubmit} 
                onChangeName={e => setName(e.target.value)}
                onChangeEmail={e => setEmail(e.target.value)}
                onChangePassword={e => setPassword(e.target.value)}
                title={'Sign Up'} /> );
};
 
export default Register;