import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminSideBar = ({ setUserId }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await axios
            .get(`api/getUsers`)
            .then((data) => setUsers(data.data.users));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="userpanel">
            {users?.map((user, index) => (
                <div key={index}>
                    <button onClick={() => setUserId(user.id)}>
                        {user.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AdminSideBar;
