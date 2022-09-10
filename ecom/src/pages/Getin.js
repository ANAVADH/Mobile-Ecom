

import { useState } from "react";
import { useDispatch,  } from "react-redux";
import { Link } from "react-router-dom";
import { Signin } from "../redux/ApiCalls";

import styles from "./styles.module.css";
// import App from "../App";

const Login = () => {


    const [username , setUsername] = useState("");

    const [password , setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
		e.preventDefault()
      
        Signin(dispatch, {username:username , password:password , loggedIn:true} )
	

    }

    



	

    

	

   
return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={(e) => handleSubmit(e)}>
						<h1>Login to Your Account</h1>
						<input
							type="text"
							placeholder="username"
							name="username"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
					
						
						<button type="submit" className={styles.green_btn} >
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
            
		</div>
        
	);
};


export default Login;