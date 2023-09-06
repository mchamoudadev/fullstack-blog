import React, { useEffect } from "react";
import { useAuth } from "../Context";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	useEffect(() => {
		if (!currentUser) return navigate("/login");
	}, [currentUser]);

	return <div>{children}</div>;
};

export default ProtectedPage;
