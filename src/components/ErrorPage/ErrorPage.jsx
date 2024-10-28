import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
// error hooks
const error = useRouteError();

    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Please Back To Home</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;