import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "./ProjectList.jsx";

const ProjectDailyReport = (props) => {
    const { userId } = props;
    const [projectIdList, setProjectList] = useState([]);

    const fetchProjectIdByUserId = async () => {
        await axios
            .get(`api/getProjectIdByUserId/${userId}`)
            .then((data) => setProjectList(data.data.projectIdList));
    };

    useEffect(() => {
        fetchProjectIdByUserId();
    }, []);

    return (
        <div>
            {projectIdList?.map((projectId, index) => (
                <div key={index}>
                    <ProjectList projectId={projectId.id} />
                </div>
            ))}
        </div>
    );
};

export default ProjectDailyReport;
