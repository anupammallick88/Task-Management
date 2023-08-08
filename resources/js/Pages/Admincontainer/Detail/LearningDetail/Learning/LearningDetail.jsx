import React, { useState, useEffect } from "react";
import axios from "axios";
import LearningDetailContent from "./LearningDetailContent.jsx";

const LearningDetail = (props) => {
    const { userId } = props;
    const [learnings, setLearnings] = useState([]);

    const fetchUserLearning = async () => {
        await axios
            .get(`api/getUserLearnings/${userId}`)
            .then((data) => setLearnings(data.data.Learnings));
    };

    useEffect(() => {
        fetchUserLearning();
    }, []);

    return (
        <div>
            {learnings?.map((learning, index) => (
                <div key={index}>
                    <LearningDetailContent learning={learning} />
                </div>
            ))}
        </div>
    );
};

export default LearningDetail;
