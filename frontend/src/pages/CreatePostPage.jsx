import React from "react";
import CreatePost from "../components/CreatePost";
import ProtectedPage from "../util/ProtectedPage";

const CreatePostPage = () => {
	return (
		<ProtectedPage>
			<CreatePost />
		</ProtectedPage>
	);
};

export default CreatePostPage;
