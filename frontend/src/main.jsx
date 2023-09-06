import React from "react";
import ReactDOM from "react-dom/client";

import Toaster from "react-hot-toast";

import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";

import SignUpPage from "./pages/SignUpPage.jsx";
import { AuthProvider } from "./Context.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/signup",
				element: <SignUpPage />,
			},
			{
				path: "/create-post",
				element: <CreatePostPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
