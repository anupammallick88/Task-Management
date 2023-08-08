import React, { useState, useEffect } from "react";
import axios from "axios";
import LearningList from "./LearningList.jsx";

const LearningDailyReport = (props) => {
    const { userId } = props;
    const [learningIdList, setLearningList] = useState([]);

    const fetchLearningIdByUserId = async () => {
        await axios
            .get(`api/getLearningIdByUserId/${userId}`)
            .then((data) => setLearningList(data.data.learningIdList));
    };

    useEffect(() => {
        fetchLearningIdByUserId();
    }, []);

    return (
        <div>
            {learningIdList?.map((learningId, index) => (
                <div key={index}>
                    <LearningList learningId={learningId.id} />
                </div>
            ))}
        </div>
    );
};

export default LearningDailyReport;
