import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const UserProfile = (props) => {
    const { userprofile, fetchUserProfile, toggleModal } = props;

    const [name, setName] = useState(userprofile.name);
    const [email, setEmail] = useState(userprofile.email);
    const [avatar, setAvatar] = useState(null);

    const updateprofilealert = () => {
        var con = confirm("Do you want to change your profile?");
        if (con == true) {
            updateProfile();
        }
    };

    const updateProfile = async () => {
        const res = await axios({
            method: "put",
            url: `/api/updateUserProfile/${userprofile.id}`,
            data: {
                name: name,
                email: email,
                avatar: avatar,
            },
        });
        if (res.data.status) {
            fetchUserProfile();
        }
    };

    const updateAvatar = async () => {
        const formData = new FormData();
        formData.append("_method", "PATCH");
        formData.append("avatar", avatar);

        await axios.post(`api/updateAvatar/${userprofile.id}`, formData);
    };

    const changeHandler = (event) => {
        setAvatar(event.target.files[0]);
    };

    return (
        <div>
            <div id="title">User Profile</div>
            <div>
                <div className="form-inline">
                    <div className="form-inline">
                        <label>Name</label>
                        <input
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={userprofile.name}
                        />
                    </div>
                    <div className="form-inline">
                        <label>Email</label>
                        <input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={userprofile.email}
                        />
                    </div>
                </div>
            </div>
            <button id="save" style={{width: "100%"}} onClick={updateprofilealert}>
                Save
            </button>
            <Form onSubmit={updateAvatar}>
                <Form.Group className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control
                        type="file"
                        name="avatar"
                        onChange={changeHandler}
                    />
                </Form.Group>
                <button type="submit" style={{width: "100%"}} id="save">
                    Upload
                </button>
            </Form>
        </div>
    );
};

export default UserProfile;
