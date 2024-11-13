import Styles from "./lists.module.css"
import { useState } from "react";

export default function Lists() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("This is the Email:", email);
        console.log("This is the password:", password);

        
        setEmail('');
        setPassword('');
    };

    return (
        <div className={Styles.total_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={Styles.form_container}>
                <label className={Styles.lables}>Email</label>
                <input 
                    className={Styles.feilds}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    value={email}
                />
                
                <label className={Styles.lables}>Password</label>
                <input 
                    className={Styles.feilds}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    value={password}
                />
                <a href="#writenow">Forgot Password ?</a>
                <button  className={Styles.button} type="submit">Login</button>

                <p1 className={Styles.signup}>Don't Have account <a1 href="Signup">Signup ?</a1></p1>
            </form>

        </div>
    );
}
