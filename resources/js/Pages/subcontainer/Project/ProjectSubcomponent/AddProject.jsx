import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-dropdown-select";

const AddProject = (props) => {
    const {
        auth,
        partners,
        platforms,
        monetarys,
        fetchProjects,
        fetchPlatforms,
        toggleModal,
    } = props;
    const [partnerOption, setPartnerOption] = useState();
    const [platformOption, setPlatformOption] = useState();
    const [monetaryOption, setMonetaryOption] = useState();

    const [name, setName] = useState("");
    const [budget, setBudget] = useState("");
    const [monetary, setMonetary] = useState("");
    const [deadline, setDeadline] = useState("");
    const [client_name, setClient_name] = useState("");
    const [description, setDescription] = useState("");
    const [platform, setPlatform] = useState("");
    const [partner, setPartner] = useState("");
    const [type, setType] = useState("");

    const userid = auth.user.id;

    useEffect(() => {
        let partners_option = [];
        let platforms_option = [];
        let monetarys_option = [];
        partners?.map((partner) => {
            partners_option.push({ value: partner.id, label: partner.name });
        });
        platforms?.map((platform) => {
            platforms_option.push({
                value: platform.name,
                label: platform.name,
            });
        });
        monetarys?.map((monetary) => {
            monetarys_option.push({
                value: monetary.name,
                label: monetary.name,
            });
        });
        setPartnerOption(partners_option);
        setPlatformOption(platforms_option);
        setMonetaryOption(monetarys_option);
    }, [partners, platforms, monetarys]);

    const addproject_alert = async () => {
        if (!name) {
            alert("Please input name!!!");
            return;
        }

        if (!budget) {
            alert("Please input budget!!!");
            return;
        }

        if (!monetary) {
            alert("Please input monetary!!!");
            return;
        }

        if (!client_name) {
            alert("Please input client_name!!!");
            return;
        }

        if (type == "fixed" && !deadline) {
            alert("Fixed projects must have deadline!");
            return;
        }

        if (!platform) {
            alert("please insert platform");
            return;
        }

        var con = confirm("Do you Want To Add This Project?");
        if (con == true) {
            await addProject();
        }
    };

    const addProject = async () => {
        const fes = await axios({
            method: "post",
            url: "/api/addProject",
            data: {
                name,
                budget,
                monetary,
                deadline,
                client_name,
                platform,
                partner,
                description,
                userid,
                type,
            },
        });
        // fetchProjects();
        // fetchPlatforms();
    };

    return (
        <div id="AddNewProject">
            <form>
                <div>
                    <h2>Add new project</h2>
                    <div>
                        <label>Project Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Input name"
                        />
                    </div>
                    <div>
                        <label>Budget</label>
                        <input
                            type="number"
                            min={"0"}
                            name="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder="Input budget"
                        />
                    </div>
                    <div>
                        <label>Monetary</label>
                        <Select
                            searchable
                            create
                            options={monetaryOption}
                            onChange={(e) => setMonetary(e)}
                        />
                    </div>
                    <div>
                        <label>Payment method</label>
                        <select
                            type="text"
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option label="fixed" value="fixed">
                                Fixed
                            </option>
                            <option label="hourly" value="hourly">
                                Hourly
                            </option>
                            <option label="monthly" value="monthly">
                                Monthly
                            </option>
                        </select>
                    </div>
                    <div>
                        <label>Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            placeholder="Input deadline"
                        />
                    </div>
                    <div>
                        <label>Client Name</label>
                        <input
                            type="text"
                            name="client_name"
                            value={client_name}
                            onChange={(e) => setClient_name(e.target.value)}
                            placeholder="Input client name"
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
                    <div>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Input description"
                        />
                    </div>
                    <button type="button" id="add" onClick={addproject_alert}>
                        Add Project
                    </button>
                    <button type="button" id="close" onClick={toggleModal}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;
