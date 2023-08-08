import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectDailyReportContent from "./ProjectDailyReportContent.jsx";

const ProjectList = (props) => {
    const { projectId } = props;
    const [projectDailyReports, setProjectDailyReports] = useState([]);

    const fetchProjectDailyReports = async () => {
        await axios
            .get(`api/getProjectDailyReportsByProjectId/${projectId}`)
            .then((data) =>
                setProjectDailyReports(data.data.projectDailyReports)
            );
    };

    useEffect(() => {
        fetchProjectDailyReports();
    }, []);

    return (
        <div>
            {projectDailyReports?.map((projectdailyreport, index) => (
                <div key={index}>
                    <ProjectDailyReportContent
                        projectdailyreport={projectdailyreport}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
