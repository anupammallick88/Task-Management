import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectDailyReportContent from "./DailyReportSubcomponent/ProjectDailyReportContent";
import LearningDailyReportContent from "./DailyReportSubcomponent/LearningDailyReportContent";

const DailyReportPanel = ({ auth }) => {
    // Get Authenticated userid
    const userid = auth.user.id;

    // variables initial setting
    const [learningnows, setLearningnows] = useState(null);
    const [projectnows, setProjectnows] = useState(null);

    // Get learning data
    const fetchLearningnows = async () => {
        await axios
            .get(`api/getLearningNow/${userid}`)
            .then(({ data }) => setLearningnows(data.learningnows));
    };

    // Get project data
    const fetchProjectnows = async () => {
        await axios
            .get(`api/getProjectNow/${userid}`)
            .then(({ data }) => setProjectnows(data.projectnows));
    };

    // Default call functions
    useEffect(() => {
        fetchLearningnows();
        fetchProjectnows();
    }, []);

    return (
        <div>
            <div id="Project Daily Report Container">
                <h2>Project Daily Report Container</h2>
                {projectnows &&
                    projectnows.map((projectnow, index) => (
                        <div key={index}>
                            <ProjectDailyReportContent
                                projectnow={projectnow}
                                userid={userid}
                            />
                        </div>
                    ))}
            </div>
            <div id="Learning Daily Report Container">
                <h2>Laerning Daily Report Container</h2>
                {learningnows &&
                    learningnows.map((learningnow, index) => (
                        <div key={index}>
                            <LearningDailyReportContent
                                learningnow={learningnow}
                                userid={userid}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DailyReportPanel;
