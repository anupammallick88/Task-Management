import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Select from "react-dropdown-select";

const ProjectContent = (props) => {
    const { project, fetchProjects, partners, platforms, fetchPlatforms } =
        props;

    const [name, setName] = useState(project.name);
    const [budget, setBudget] = useState(project.budget);
    const [deadline, setDeadline] = useState(project.deadline);
    const [client_name, setClient_name] = useState(project.client_name);
    const [platform, setPlatform] = useState(project.platform);
    const [partner, setPartner] = useState(project.partner);
    const [description, setDescription] = useState(project.description);
    const [type, setType] = useState(project.type);
    const [isOpen, setIsOpen] = useState(false);

    var progressbar = project.progress+"%";

    const [partnerOption, setPartnerOption] = useState();
    const [platformOption, setPlatformOption] = useState();

    useEffect(() => {
        let partners_option = [];
        let platforms_option = [];
        partners?.map((partner) => {
            partners_option.push({ value: partner.id, label: partner.name });
        });
        platforms?.map((platform) => {
            platforms_option.push({
                value: platform.name,
                label: platform.name,
            });
        });
        setPartnerOption(partners_option);
        setPlatformOption(platforms_option);
    }, [partners, platforms]);

    const deleteproject_alert = (id) => {
        var con = confirm("Do You Want To Delete This Project?");
        if (con == true) {
            deleteProject(id);
        }
    };

    const updateProject_alert = (id) => {
        var con = confirm("Do You Want To Change This Project Information?");
        if (con == true) {
            updateProject(id);
            toggleModal();
        }
    };

    const deleteProject = async (id) => {
        const res = await axios.get(`api/deleteProject/${id}`);
        if (res.data.status) {
            fetchProjects();
        }
    };

    const updateProject = async (id) => {
        const res = await axios({
            method: "put",
            url: `/api/updateProject/${id}`,
            data: {
                name: name,
                budget: budget,
                deadline: deadline,
                client_name: client_name,
                platform: platform,
                partner: partner,
                description: description,
                type,
            },
        });
        if (res.data.status) {
            // fetchProjects();
            // fetchPlatforms();
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottome: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    Modal.defaultStyles.overlay.backgroundColor = "#000000A0";

    return (
        <div>
            <div>
                <div id="title">{project.name}</div>

                <div className="form-inline">
                    <div>
                        <label>Client Name</label>
                        <div></div>
                        <p>{project.client_name}</p>
                    </div>
                    <div>
                        <label>Budget</label>
                        <div>
                            <p>{project.budget}</p>
                        </div>
                    </div>
                    <div>
                        <label>Payment method</label>
                        <div>
                            <p>{project.type}</p>
                        </div>
                    </div>
                    <div>
                        <label>Deadline</label>
                        <div>
                            <p>{project.deadline}</p>
                        </div>
                    </div>
                </div>
                <div className="form-inline">
                    <div>
                        <label>Platform</label>
                        <div>
                            <p>{project.platform}</p>
                        </div>
                    </div>
                    <div>
                        <label>Partner</label>
                        <div>
                            <p>{project.partner && project.partner}</p>
                        </div>
                    </div>
                    <div>
                        <label>State</label>
                        <div>
                            <p>{project.state}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="progress">
                    <div className="progress-value" style={{width: {progressbar}}}></div>
                </div> */}
                <div className="progress">
                    <div className="progressbar" style={{width: progressbar}}></div>
                </div>
                <div>
                    <textarea readOnly value={project.description} />
                </div>

                <button
                    id="danger"
                    onClick={() => deleteproject_alert(project.id)}
                >
                    Delete project
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
                contentLabel="Edit Project Information"
            >
                <div>
                    <div className="form-inline">
                        <div>
                            <label>Project Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={project.name}
                            />
                        </div>
                        <div>
                            <label>Budget</label>
                            <input
                                type="number"
                                name="budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                placeholder={project.budget}
                            />
                        </div>
                        <div>
                            <label>Payment method</label>
                            <Select
                                name="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="fixed">Fixed</option>
                                <option value="hourly">Hourly</option>
                                <option value="monthly">Monthly</option>
                            </Select>
                        </div>
                        <div>
                            <label>Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                placeholder={project.deadline}
                            />
                        </div>
                    </div>
                    <div className="form-inline">
                        <div>
                            <label>Client Name</label>
                            <input
                                type="text"
                                name="client_name"
                                value={client_name}
                                onChange={(e) => setClient_name(e.target.value)}
                                placeholder={project.client_name}
                            />
                        </div>
                        <div>
                            <label>Platform</label>
                            <Select
                                searchable
                                create
                                options={platformOption}
                                onChange={(e) => setPlatform(e)}
                            />
                        </div>
                        <div>
                            <label>Partner</label>
                            <Select
                                multi
                                clearable
                                searchable
                                options={partnerOption}
                                onChange={(e) => setPartner(e)}
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={project.description}
                        />
                    </div>
                </div>
                <button
                    id="save"
                    onClick={() => updateProject_alert(project.id)}
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

export default ProjectContent;
