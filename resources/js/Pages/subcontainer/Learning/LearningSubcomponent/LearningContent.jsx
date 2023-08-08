import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Select from "react-dropdown-select";

const LearningContent = (props) => {
    const { learning, fetchLearnings } = props;

    const [title, setTitle] = useState(learning.title);
    const [subject_title, setSubject_title] = useState(learning.subject_title);
    const [course, setCourse] = useState(learning.course);
    const [deadline, setDeadline] = useState(learning.deadline);
    const [description, setDescription] = useState(learning.description);

    var progressbar = learning.progress+"%";

    const delLearning_alert = (id) => {
        var con = confirm("Are You Want To Delete This Learning?");
        if (con == true) {
            deleteLearning(id);
        }
    };

    const updateLearning_alert = (id) => {
        var con = confirm("Are You Want To Change This Learning Information?");
        if (con == true) {
            updateLearning(id);
            toggleModal();
        }
    };

    const deleteLearning = async (id) => {
        const res = await axios.get(`api/deleteLearning/${id}`);
        if (res.data.status) {
            // fetchLearnings();
        }
    };

    const updateLearning = async (id) => {
        const res = await axios({
            method: "put",
            url: `/api/updateLearning/${id}`,
            data: {
                title: title,
                subject_title: subject_title,
                deadline: deadline,
                course: course,
                description: description,
            },
        });
        if (res.data.status) {
            // fetchLearnings();
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    Modal.defaultStyles.overlay.backgroundColor = "#000000A0";

    return (
        <div>
            <div>
                <div id="title">{learning.title}</div>

                <div className="form-inline">
                    <div>
                        <label>Title</label>
                        <p>{learning.title}</p>
                    </div>
                    <div>
                        <label>Subject Title</label>
                        <p>{learning.subject_title}</p>
                    </div>
                    <div>
                        <label>Deadline</label>
                        <p>{learning.deadline}</p>
                    </div>
                    <div>
                        <label>Course</label>
                        <p>{learning.course}</p>
                    </div>
                </div>
                <div className="progress">
                    <div className="progressbar" style={{width: progressbar}}></div>
                </div>
                <textarea
                    readOnly
                    name="description"
                    value={learning.description}
                />
                <button
                    id="danger"
                    onClick={() => delLearning_alert(learning.id)}
                >
                    Delete Learning
                </button>
                <button id="edit" onClick={toggleModal}>
                    Edit
                </button>
            </div>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                style={customStyles}
                onRequestClose={toggleModal}
                contentLabel="Edit Learning Information"
            >
                <div>
                    <div className="form-inline">
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Subject Title</label>
                            <Select
                                name="suject_title"
                                value={subject_title}
                                onChange={(e) =>
                                    setSubject_title(e.target.value)
                                }
                            >
                                <option value="foreign">Foreign</option>
                                <option value="basic">Basic</option>
                                <option value="hightech">Hightech</option>
                            </Select>
                        </div>
                        <div>
                            <label>Course</label>
                            <input
                                type="text"
                                name="course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
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
                    </div>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    id="save"
                    onClick={() => updateLearning_alert(learning.id)}
                >
                    Save
                </button>
                <button id="close" onClick={toggleModal}>
                    Close modal
                </button>
            </Modal>
        </div>
    );
};

export default LearningContent;
