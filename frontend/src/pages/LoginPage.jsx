import React, { useEffect } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context";

const LoginPage = () => {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser) return navigate("/create-post");
	}, [currentUser]);

	return <Login />;
};

export default LoginPage;
