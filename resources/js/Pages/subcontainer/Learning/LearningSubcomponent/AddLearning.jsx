import React, { useState } from "react";
import axios from "axios";
import Select from "react-dropdown-select";

const AddLearning = (props) => {
    const { auth, fetchLearnings, toggleModal } = props;
    const [subject_title, setSubject_title] = useState("foreign");
    const [title, setTitle] = useState("");
    const [course, setCourse] = useState("");
    const [deadline, setDeadline] = useState("");
    const [description, setDescription] = useState("");

    const userid = auth.user.id;

    const addlearning_alert = async () => {
        var con = confirm("Do you Want To Add This Learning Schedule?");
        if (con == true) {
            await addLearning();
            // fetchLearnings();
        }
    };

    const addLearning = async () => {
        if (!(subject_title && title && course && deadline)) {
            alert("Please input correct data!");
            return;
        }

        const fes = await axios({
            method: "post",
            url: "/api/addLearning",
            data: {
                subject_title,
                title,
                course,
                deadline,
                description,
                userid,
            },
        });
    };

    return (
        <div id="AddNewLearning">
            <form>
                <div>
                    <h2>Add New Learning</h2>
                    <div>
                        <label>Subject title</label>
                        <Select
                            name="subject_title"
                            value={subject_title}
                            onChange={(e) => setSubject_title(e.target.value)}
                        >
                            <option value="foreign">Foreign</option>
                            <option value="basic">Basic</option>
                            <option value="hightech">Hightech</option>
                        </Select>
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Input title"
                        />
                    </div>
                    <div>
                        <label>Course</label>
                        <input
                            type="text"
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="input course"
                        />
                    </div>
                    <div>
                        <label>Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        />
                    </div>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="input description"
                    />
                </div>
                <button type="button" id="save" onClick={addlearning_alert}>
                    Add Learning Schedule
                </button>
                <button id="close" onClick={toggleModal}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default AddLearning;
