import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context";
import { toast } from "react-hot-toast";
import axios from "axios";

const Header = () => {
	const { currentUser, setCurrentUser } = useAuth();

	const handleLogout = async () => {
		try {
			const { data } = await axios.post("/api/v1/users/logout");
			toast.success(data);
			setCurrentUser(null);
		} catch (err) {
			console.log(err.response.data);
			toast.error(err.response.data);
		}
	};

	return (
		<div>
			<header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<h1>Logo</h1>
				<ul>
					{currentUser ? (
						<Link to="/create-post">Create Post</Link>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/signup">Sign up</Link>
						</>
					)}
				</ul>
				{currentUser && (
					<>
						<button onClick={handleLogout}>Logout</button>
						<span>Welcome {currentUser?.username}</span>
					</>
				)}
			</header>
		</div>
	);
};

export default Header;
