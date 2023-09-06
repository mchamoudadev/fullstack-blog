import React, { useContext, useState } from "react";
import axios from "axios";
import { useAuth, AuthContext } from "../Context";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { currentUser, setCurrentUser } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await axios.post("/api/v1/users/login-user", {
				username,
				password,
			});

			setCurrentUser(data);
			navigate("/create-post");
			console.log("success login successful");
		} catch (err) {
			console.log("error at login", err);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Login Form</h1>
				<input
					value={username}
					onChange={(event) => setUserName(event.target.value)}
					type="text"
					placeholder="enter your username"
				/>
				<br />
				<input
					onChange={(event) => setPassword(event.target.value)}
					value={password}
					type="password"
					placeholder="enter your password"
				/>
				<br></br>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
