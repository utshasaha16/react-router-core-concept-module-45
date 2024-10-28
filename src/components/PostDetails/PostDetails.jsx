import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {body, id, title} = post
    return (
        <div>
            <h2>Post Details About: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;