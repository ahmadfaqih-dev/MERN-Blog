import React from 'react';

import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
    return (
        <div className="main-page">
        <div className="left">
         <img src={RegisterBg} className="bg-image" alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title" >Login</p>
            
            <Input label="Email" placeholder="Email"/>
            <Gap height={18} />
            <Input label="Password" placeholder="Password"/>
            <Gap height={40} />
            <Button title="Login" />
            <Gap height={80} />
            <Link title="Sudah punya akun, silahkan daftar"/>
        </div>
    </div>
    )
}

export default Login;
