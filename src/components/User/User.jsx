import './user.css'

const User = ({user}) => {
    const {Id, name, phone, email} = user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;