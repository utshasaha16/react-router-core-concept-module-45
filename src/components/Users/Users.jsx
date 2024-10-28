import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>this is users: {users.length}</h2>
            <p>good and vodro users</p>
            <div  className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;