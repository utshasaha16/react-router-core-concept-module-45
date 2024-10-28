import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = useLoaderData();
    const {body, id, title} = post;

    // onclick function for go back button
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Post Details About: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;