import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectDetailContent from "./ProjectDetailContent.jsx";

const ProjectDetail = (props) => {
    const { userId } = props;
    const [projects, setProjects] = useState([]);

    const fetchUserProject = async () => {
        await axios
            .get(`api/getUserProjects/${userId}`)
            .then((data) => setProjects(data.data.Projects));
    };

    useEffect(() => {
        fetchUserProject();
    }, []);
    
    return (
        <div>
            {projects?.map((project, index) => (
                <div key={index}>
                    <ProjectDetailContent project={project} />
                </div>
            ))}
        </div>
    );
};

export default ProjectDetail;
