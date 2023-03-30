import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../functions/userAPI.js';

const Users = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getUsers(setUsers)
        console.log('what', users)
    }, [users.length])

    return (


        <div id="users-container">
            <h4 className="large-heading">List of Users</h4>
            <div className="user-block content-short">
                            <div className="user-item">Name</div>
                            <div className="user-item">Email</div>
                            <div className="content-right">Rating</div>
                        </div>
            { users.map((user) => {
                return   <Link
                            className="user-block"
                            to={{
                            pathname: "/profile/" + user.nameID,
                            }}
                            >
                            <div className="user-item">{user.name}</div>
                            <div className="user-item">{user.email}</div>
                            <div className="content-right">{user.rating}</div>
                        </Link>
            })}
        </div>
    )
}

export default Users;