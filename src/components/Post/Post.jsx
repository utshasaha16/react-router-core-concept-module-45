import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    // use navigation hooks
    const navigate = useNavigate();

    const {id, title} = post;

    const seeDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="user">
            <h3>Post of id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={seeDetails}>click to see details</button>
        </div>
    );
};

export default Post;