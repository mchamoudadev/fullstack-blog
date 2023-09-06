import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useAuth } from "./Context";
import { useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function App() {
	const { setCurrentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const { data } = await axios.get("/api/v1/users/get-user-profile");
				setCurrentUser(data);
			} catch (err) {
				if (err.response.status === 403) {
					// toast.error("please login first");
					navigate("/login");
				}
				console.log("err", err.response.status);
			}
		};
		fetchUserProfile();
	}, [setCurrentUser]);

	return (
		<div style={{ maxWidth: "1112px", marginInline: "auto" }}>
			<Toaster />
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
