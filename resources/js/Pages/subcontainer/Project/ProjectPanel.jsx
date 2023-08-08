import React, { useState, useEffect } from "react";
import AddProject from "./ProjectSubcomponent/AddProject.jsx";
import ProjectContent from "./ProjectSubcomponent/ProjectContent";
import Modal from "react-modal";
import axios from "axios";
import "./Project.css";

const ProjectPanel = ({ auth }) => {
    // variables initial setting
    const [projects, setProjects] = useState([]);
    const [partners, setPartners] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [monetarys, setMonetary] = useState([]);

    // Get Authenticated userid
    const userid = auth.user.id;

    // get projects that create by user id
    const fetchProjects = async () => {
        await axios
            .get(`api/getProject/${userid}`)
            .then((data) => setProjects(data.data.project));
    };

    // get all users information for choosing partner.
    const fetchPartners = async () => {
        await axios
            .get(`api/getPartner/${userid}`)
            .then((data) => setPartners(data.data.partner));
    };

    // get recorded platforms from database
    const fetchPlatforms = async () => {
        await axios
            .get(`api/getPlatform`)
            .then((data) => setPlatforms(data.data.platform));
    };

    // get monetarys from project database
    const fetchMonetarys = async () => {
        await axios
            .get(`api/getMonetary`)
            .then((data) => setMonetary(data.data.monetary));
    };

    // default call functions
    useEffect(() => {
        fetchProjects();
        fetchPartners();
        fetchPlatforms();
        fetchMonetarys();
    }, []);

    // Modal controller
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    // Modal style
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "50%",
        },
    };

    Modal.defaultStyles.overlay.backgroundColor = "#000000A0";

    return (
        <div>
            <div id="Show Project List in Progress">
                {projects?.map((project, index) => (
                    <div key={index}>
                        <ProjectContent
                            project={project}
                            partners={partners}
                            platforms={platforms}
                            monetarys={monetarys}
                        />
                    </div>
                ))}
            </div>
            <div id="Add Project Side">
                <button id="add" onClick={toggleModal}>
                    Add Project
                </button>
            </div>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={toggleModal}
                style={customStyles}
            >
                <AddProject
                    auth={auth}
                    monetarys={monetarys}
                    partners={partners}
                    platforms={platforms}
                    toggleModal={toggleModal}
                />
            </Modal>
        </div>
    );
};

export default ProjectPanel;
