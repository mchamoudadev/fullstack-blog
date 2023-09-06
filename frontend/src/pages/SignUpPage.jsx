import React, { useEffect } from "react";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context";

const SignUpPage = () => {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser) return navigate("/create-post");
	}, []);

	return <SignUp />;
};

export default SignUpPage;
