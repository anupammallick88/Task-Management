import React, { useState, useEffect } from "react";
import axios from "axios";
import LearningDailyReportContent from "./LearningDailyReportContent.jsx";

const LearningList = (props) => {
    const { learningId } = props;
    const [learningDailyReports, setLearningDailyReports] = useState([]);

    const fetchLearningDailyReports = async () => {
        await axios
            .get(`api/getLearningDailyReportsByLearningId/${learningId}`)
            .then((data) =>
                setLearningDailyReports(data.data.learningDailyReports)
            );
    };

    useEffect(() => {
        fetchLearningDailyReports();
    }, []);

    return (
        <div>
            {learningDailyReports?.map((learningdailyreport, index) => (
                <div key={index}>
                    <LearningDailyReportContent
                        learningdailyreport={learningdailyreport}
                    />
                </div>
            ))}
        </div>
    );
};

export default LearningList;
